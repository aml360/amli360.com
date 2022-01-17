#!/bin/bash
GO_TO=$(dirname "$0")
cd $GO_TO

# First param must be the path inside the machine where front build files will be deployed
PATH_TO_DEPLOY=$1
SSH_KEY=$2
SSH_USERNAME=$3
SSH_HOST=$4

SSH_KEY_TMP="$(mktemp -p /dev/shm/)";
echo "$SSH_KEY">$SSH_KEY_TMP

cd ../frontend

scp -o "StrictHostKeyChecking=no" -i $SSH_KEY_TMP -r dist/amli360-frontend/* $SSH_USERNAME@$SSH_HOST:$PATH_TO_DEPLOY
# ssh -o "StrictHostKeyChecking=no" -i $SSH_KEY_TMP "$SSH_USERNAME@$SSH_HOST" "echo hola"
