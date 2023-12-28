#!/bin/bash

for dir in */; do
    (cd "$dir" && rm *.webp)
done
