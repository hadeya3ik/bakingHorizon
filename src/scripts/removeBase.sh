#!/bin/bash

for dir in ../images/dec31gallery/*/; do
    if [ -d "$dir" ]; then  # Check if it's a directory
        for file in "$dir"*-Edit.*; do
            if [ -f "$file" ]; then  # Check if it's a file
                newname="${file/-Edit/}"  # Remove the -Edit part from the filename
                mv "$file" "$newname"  # Rename the file
            fi
        done
    fi
done