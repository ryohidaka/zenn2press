#!/bin/bash

npm run build

# Help command
npx zenn2press --help

printf '\n%s\n' ====================

# No params
npx zenn2press

printf '\n%s\n' ====================

# Set params
press_articles_dir="demo/press/docs/articles"
press_images_dir="demo/press/docs/public/images"

find $press_articles_dir -mindepth 1 -not -name '.gitignore' -delete
find $press_images_dir -mindepth 1 -not -name '.gitignore' -delete

npx zenn2press \
    -d $press_articles_dir \
    -s demo/zenn \
    -m $press_images_dir \
    -c demo/zenn2press-config.json \
    -i sample-article-1
