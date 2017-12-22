pipeline {
  agent any
  stages {
    stage('upload') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'amazon', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh 'echo $PASSWORD'
          echo "${env.USERNAME}"
        }
        s3Upload(bucket: 'it.bz.geobank', acl: 'PublicRead', file: './src')
      }
    }
  }
}
