pipeline {
  agent any
  stages {
    stage('upload') {
      steps {
        s3Upload(bucket: 'it.bz.geobank', acl: 'PublicRead', file: './', metadatas: ['Content-Type:text/html','Contains:htmlcssjs'])
      }
    }
  }
}