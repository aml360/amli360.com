export DOCKER_CLI_EXPERIMENTAL=enabled
echo `tput setaf 3`Generando imagen`tput sgr0`
docker buildx build --load --platform linux/arm64 -t nodenest .