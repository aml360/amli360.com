use actix_web::{web, App, HttpRequest, HttpServer, Responder};

async fn greet(req: HttpRequest) -> impl Responder {
    let name = req.match_info().get("name").unwrap_or("World");
    format!("Helloo {}!", &name)
}

async fn to_nestjs(req: HttpRequest) -> impl Responder {
    let head = req.head();
    let uri = req.uri();
    let node_uri = &uri.to_string()["/nest".len()..];
    let node_url = format!("http://localhost:3000{}", node_uri);
    let response = awc::Client::new()
        .request_from(node_url, head)
        .send()
        .await
        .unwrap();
    "test"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(greet))
            .route("/nest*", web::route().to(to_nestjs))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
