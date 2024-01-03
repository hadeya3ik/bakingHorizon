#!/bin/bash

for dir in ../images/dec31gallery/*/; do
    (cd "$dir" && mogrify -resize 1024 -quality 40 -f