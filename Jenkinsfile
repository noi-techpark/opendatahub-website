pipeline {
  agent any
  stages {
    stage('upload') {
      steps {
        s3Upload(bucket: 'it.bz.geobank', acl: 'PublicRead', file: './src')
      }
    }
  }
   environment {
     AWS_ACCESS_KEY_ID = 'AKIAJG7AXYMPJXDKFJGA'
     AWS_SECRET_ACCESS_KEY = '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'
   }
}
