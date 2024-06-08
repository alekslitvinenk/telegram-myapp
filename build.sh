#!/usr/bin/env bash

rm -R dist

./bump.sh "$@"

version=$(cat VERSION)
ver="v$version"

docker build -t alekslitvinenk/welcomer:"$ver" -t alekslitvinenk/welcomer:latest . --no-cache && \
docker push alekslitvinenk/welcomer:"$ver"
docker push alekslitvinenk/welcomer:latest