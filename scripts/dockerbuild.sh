#!/bin/bash
GO_TO=$(dirname "$0")
cd $GO_TO

cd ../frontend && npm run build:prod &
P1=$!
cd ../backend && npm run build:prod &
P2=$!
wait $P1 $P2

export DOCKER_CLI_EXPERIMENTAL=enabled
echo `tput setaf 3`Generando imagen`tput sgr0`
docker buildx build --load --platform linux/arm64 -t nodenest .
rm -rf $PWD/angular_dist/
mv $PWD/angular_dist.link $PWD/angular_dist

# SSH

echo `tput setaf 3`Creating img.tar`tput sgr0`

docker save  -o ~/dkImages/socketnest.tar nodenest

echo `tput setaf 3`Copying to nanopi`tput sgr0`

scp ~/dkImages/socketnest.tar $option:~/dkImages/

echo `tput setaf 3`executing: 'Cargando imagen'`tput sgr0`

ssh -t $option 'cd ~/dkImages && docker load -i socketnest.tar'
ssh neo3@ip.aml360esp.com 'docker stop nodenest; docker rm nodenest; docker run --restart=always -p 80:3000 -v ~/dkVolumes/nodenest/ngdist:/app/angular_dist --name nodenest -d nodenest'
