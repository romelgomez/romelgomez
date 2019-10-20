#!/bin/bash

(cd autana/ && ng build --prod)
rm -rf assets/
mv autana/dist/autana/* .
