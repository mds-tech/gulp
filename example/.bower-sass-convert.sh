#!/bin/bash

# Hack to "convert" css files to sass, for later @import

base="`pwd`/vendor/bower";
for dir in "$base/path/to/dist/css/" "$base/another/path/media/css/"; do
    for file in $dir*.css; do
        mv "$file" "$dir`basename \"$file\" .css`.scss"
    done
done
