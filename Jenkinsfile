pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
    timestamps()
  }
  environment {
    MYREGISTRY = 'kkzxak47/nextjs-app'
    MYREGISTRYCREDENTIAL = 'dockerhub-kkzxak47'
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
        script {
          dockerImage = docker.build MYREGISTRY + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps {
        script {
          docker.withRegistry('', MYREGISTRYCREDENTIAL)
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
}
