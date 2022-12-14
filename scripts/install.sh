#!/usr/bin/env bash
set -e

image=$1
port=$2

git clone https://github.com/bensonirah/hr-front.git $image

cd $image

yarn install

docker build -t $image:v0.0.1 .

docker run -p $port:3000 -v $(pwd):/app --rm --name $image -d $image:v0.0.1
