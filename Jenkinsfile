pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''#!/bin/sh

# Build the image docker
docker build -t node_monitoramento_agricola_image_build .
'''
      }
    }
    stage('Test') {
      parallel {
        stage('Run docker') {
          steps {
            sh '''#!/bin/sh

# Subindo o container de teste
docker run -d -p 5432:5432 --name=db postgres:9.6
docker run -d -p 3000:3000 -v :/usr/app --name=app --link db:db node_monitoramento_agricola_image_build

# Esperar o container do banco subir
while ! curl http://localhost:5432/ 2>&1 | grep \'52\'
do
  sleep 1
done
sleep 2
'''
          }
        }
        stage('run test') {
          steps {
            sh '''#!/bin/sh

docker exec -i app yarn test
exit_code=$?

# Derrubando o container velho
# docker rm -f app
# docker rm -f db


if [ $exit_code -ne 0 ]; then
  exit 1
fi'''
          }
        }
      }
    }
  }
}