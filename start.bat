@ECHO OFF

docker build -t cruise-r-nah . && docker run -p 3000:3000 cruise-r-nah