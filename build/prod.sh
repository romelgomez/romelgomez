#!/bin/bash

(cd autana/ && ng build --prod)
rm -rf assets/
find . -maxdepth 1 -type f -delete
cp base/* .
mv autana/dist/autana/* .
