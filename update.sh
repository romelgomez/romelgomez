# find everything and deleted except the update.sh file and .git folder 
rm -rf assets & rm -rf temp & find . -maxdepth 1 -type f ! -name 'update.sh' -delete

# Create a new temp folder
mkdir -p temp/

# Clone Autana - Angular - project in the temp/ foler
git clone git@github.com:romelgomez/autana.git temp/

# Install dependencies 
(cd temp/ && yarn install)

# build for production
(cd temp/ && ng build --prod)

# move the build files to the root path
mv temp/dist/autana/* .

rm -rf temp