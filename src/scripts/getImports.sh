#!/bin/bash

# output_file="./test.txt"

# for dir in ../images/dec31gallery/*/; do
#     (cd "$dir" && 
#         for file in *; do
#             echo "import" $(basename $file .jpg) "from ./../../images/gallery/"$dir$file  >> $output_file
#         done)
#     echo
# done

# counter=0
# for dir in ../images/dec31gallery/*/; do 
#     echo "export const "$(basename $dir)" = ["  >> $output_file
#     (cd $dir && for file in * ; do
#         baseFile=$(basename $file .jpg)
#         echo "{img: $baseFile.jpg, img_hd : $baseFile.webp, key: $counter} , "  >> $output_file
#         ((counter++))
#         done)
#     echo "]"  >> $output_file
# done


output_file="./test.txt"
# echo "jlk" > "$output_file" # Clear the output file at the beginning
echo "" > "$output_file"

for dir in ../images/dec31gallery/*/; do
        (cd "$dir" && 
            for file in *; do
            echo  >> "$output_file" 
                if [ "${file##*.}" = "webp" ]; then
                    echo "import $(basename "$file" .webp) from ./../../images/gallery/${dir}${file}" >> "$output_file" 
                else 
                    echo "import $(basename "$file" .jpg)_hd from ./../../images/gallery/${dir}${file}" >> "$output_file" 
                fi
            done)
    echo  >> "$output_file" 
done


# counter=0
# for dir in ../images/dec31gallery/*/; do 
#     echo "export const "$(basename $dir)" = [" 
#     (cd $dir && for file in * ; do
#         baseFile=$(basename $file .jpg)
#         echo "{img: $baseFile.jpg, img_hd : $baseFile.webp, key: $counter} , "  
#         ((counter++))
#         done)
#     echo "]"  
# done
