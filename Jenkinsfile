pipeline {
  agent any
  stages {
    stage('upload') {
      steps {
        s3Upload(bucket: 'it.bz.geobank', acl: 'PublicRead', metadatas: ['Content-Type:text/html','Description:Website for Geobank project'], includePathPattern: '**',excludePathPattern: '*/.git/* Jenkinsfile')
      }
    }
  }
  environment {
    AWS_ACCESS_KEY_ID = 'AKIAIGVR3ZPGIFGAME3Q'
    AWS_SECRET_ACCESS_KEY = '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'
  }
}
