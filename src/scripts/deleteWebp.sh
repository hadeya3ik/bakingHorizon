#!/bin/bash

for dir in ../images/dec31gallery/*/; do
    (cd "$dir" && rm *.webp)
done
