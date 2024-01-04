#!/bin/bash

output_file="/Users/hadeya/Desktop/Desktop - Hadeya’s MacBook Air/bakinghorizon/src/scripts/test.jsx"

echo "" > "$output_file"
for dir in ../images/dec31gallery/*/; do
        (cd "$dir" && 
            for file in *; do
                if [ "${file##*.}" = "webp" ]; then
                    echo "import $(basename "$file" .webp) from '${dir}${file}';" >> "$output_file"
                else 
                    echo "import $(basename "$file" .jpg)_hd from 