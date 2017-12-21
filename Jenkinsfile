pipeline {
  agent any
  stages {
    stage('upload') {
      steps {
        s3Upload(bucket: 'arn:aws:s3:::it.bz.geobank', acl: 'PublicRead', file: './', metadatas: ['Content-Type:text/html','Contains:htmlcssjs'])
      }
    }
  }
}
