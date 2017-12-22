pipeline {
  agent any
  stages {
    stage('upload') {
      withCredentials([usernamePassword(credentialsId: 'amazon',
                           usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh 'echo $PASSWORD'
          echo "${env.USERNAME}"
      }
      steps {
        s3Upload(bucket: 'it.bz.geobank', acl: 'PublicRead', file: './src')
      }
    }
  }
}
