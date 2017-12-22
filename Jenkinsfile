pipeline {
  agent any
  stages {
    stage('upload') {
      steps {
        s3Upload(bucket: 'it.bz.geobank', acl: 'PublicRead', includePathPattern: '**/src/**')
      }
    }
  }
  environment {
    AWS_ACCESS_KEY_ID = 'AKIAIGVR3ZPGIFGAME3Q'
    AWS_SECRET_ACCESS_KEY = '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'
  }
}
