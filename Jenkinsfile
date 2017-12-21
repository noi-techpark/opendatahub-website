pipeline {
  agent any
  stages {
    stage('upload') {
      steps {
        s3Upload(bucket: 'it.bz.geobank', acl: 'PublicRead', file: './', metadatas: ['Content-Type:text/html','Contains:htmlcssjs'])
      }
    }
  }
  environment {
    AWS_ACCESS_KEY_ID = '${env.s3_key}'
    AWS_SECRET_ACCESS_KEY = '${env.s3_secret}'
  }
}