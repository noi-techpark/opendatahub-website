pipeline {
  agent any
  stages {
    stage('upload') {
      wrappers {
        credentialsBinding {
          amazonWebServicesCredentialsBinding {
            accessKeyVariable("AWS_ACCESS_KEY_ID")
            secretKeyVariable("AWS_SECRET_ACCESS_KEY")
            credentialsId("s3 geobank-website")
          }
        }
      }
      steps {
        s3Upload(bucket: 'it.bz.geobank', acl: 'PublicRead', file: './src')
      }
    }
  }
}
