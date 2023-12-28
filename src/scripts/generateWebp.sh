#!/bin/bash

for dir in */; do
    (cd "$dir" && mogrify -resize 1024 -quality 40 -format webp *.jpg)
done
