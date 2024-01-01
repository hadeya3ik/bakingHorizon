#!/bin/bash

output_file="/Users/hadeya/Desktop/Desktop - Hadeya’s MacBook Air/bakinghorizon/src/scripts/test.jsx"

echo "" > "$output_file"
for dir in ../images/dec31gallery/*/; do
        (cd "$dir" && 
            for file in *; do
                if [ "${file##*.}" = "webp" ]; then
                    echo "import $(basename "$file" .webp) from '${dir}${file}';" >> "$output_file"
                else 
                    echo "import $(basename "$file" .jpg)_hd from '${dir}${file}';" >> "$output_file"
                fi
        done)
    echo
done

echo >> "$output_file"

for dir in ../images/dec31gallery/*/; do 
    counter=0
    echo "export const "$(basename $dir)" = [" >> "$output_file" 
    (cd $dir && for file in * ; do
        baseFile=$(basename $file .jpg)
        echo "{img: $baseFile, img_hd : $baseFile"_hd", key: $counter} , " >> "$output_file"
        ((counter++))
        done)
    echo "]" >> "$output_file"
done
