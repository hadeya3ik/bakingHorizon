#!/bin/bash

for dir in ../images/dec31gallery/*/; do
    (cd "$dir" && 
        for file in *; do
            echo "import" $(basename $file .jpg) "from ./../../images/gallery/"$dir$file
        done)
    echo
done

counter=0
for dir in ../images/dec31gallery/; do 
    echo "export const "$(basename $dir)" = ["
    (cd $dir && for file in * ; do
        baseFile=$(basename $file .jpg)
        echo "{img: $baseFile.jpg, img_hd : $baseFile.webp, key: $counter} , "
        ((counter++))
        done)
    echo "]"
done