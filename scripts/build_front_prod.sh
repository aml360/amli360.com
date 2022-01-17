#!/bin/bash
GO_TO=$(dirname "$0")
cd $GO_TO

cd ../frontend && npm run build:prod



