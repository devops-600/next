pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
    timestamps()
  }
  environment {
    MYREGISTRY = 'kkzxak47/nextjs-app'
    DOCKERHUB_CREDENTIALS = '05a4b886-4182-4540-8523-9b048ad075a2'
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Building image') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        script {
          dockerImage = docker.build("${MYREGISTRY}:${env.BUILD_ID}")
          dockerImage.push()
        }
      }
    }
    stage('Deploy') {
      steps {
        sh './deploy.sh'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
