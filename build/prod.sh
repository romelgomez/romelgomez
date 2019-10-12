#!/bin/bash

(cd autana/ && ng build --prod)
mv autana/dist/autana/* .
