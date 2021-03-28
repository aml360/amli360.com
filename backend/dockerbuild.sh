#!/bin/bash
echo `tput setaf 2`Introducir 1 si casa o 2 fuera`tput sgr0`
read var
if [ $var = 1 ]; then
    var=1
    elif [ $var = 2 ]; then
    var=2
else
    echo `tput setaf 1`El numero introducido no es ni 1 ni 2`tput sgr0`
    exit 1
fi

echo `tput setaf 3`Compliando angular y nest`tput sgr0`
mv $PWD/angular_dist $PWD/angular_dist.link


cd ../../Angular/socketAngular && ng build --prod &
P1=$!
cd ../../Nest/socket-nest && nest build &
P2=$!
wait $P1 $P2

cp -r ~/Escritorio/Servidor/Angular/socketAngular/dist/socketAngular $PWD/angular_dist/
export DOCKER_CLI_EXPERIMENTAL=enabled
echo `tput setaf 3`Generando imagen`tput sgr0`
docker buildx build --load --platform linux/arm64 -t nodenest .
rm -rf $PWD/angular_dist/
mv $PWD/angular_dist.link $PWD/angular_dist

# SSH
option1=neo3@192.168.1.12
option2=neo3@ip.aml360esp.com
option=0
if [ $var = 1 ]; then
    option=$option1
else
    option=$option2
fi

echo `tput setaf 3`Creating img.tar`tput sgr0`

docker save  -o ~/dkImages/socketnest.tar nodenest

echo `tput setaf 3`Copying to nanopi`tput sgr0`

scp ~/dkImages/socketnest.tar $option:~/dkImages/

echo `tput setaf 3`executing: 'Cargando imagen'`tput sgr0`

ssh -t $option 'cd ~/dkImages && docker load -i socketnest.tar'
ssh neo3@ip.aml360esp.com 'docker stop nodenest; docker rm nodenest; docker run --restart=always -p 80:3000 -v ~/dkVolumes/nodenest/ngdist:/app/angular_dist --name nodenest -d nodenest'