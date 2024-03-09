pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '135', daysToKeepStr: '135'))
    timestamps()
  }
  environment {
    MYREPO = 'kkzxak47/nextjs-app'
    DOCKERHUB_CREDENTIALS = credentials('aws-mysite-jenkins-dockerhub')
  }

  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
    stage('Build') {
      steps {
        sh 'docker build -t $MYREPO:$BUILD_NUMBER .'
        sh 'docker tag $MYREPO:$BUILD_NUMBER $MYREPO:latest'
      }
    }
    stage('Push Image to DockerHub') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        sh 'docker push $MYREPO:$BUILD_NUMBER'
        sh 'docker push $MYREPO:latest'
      }
    }
    stage('Deploy') {
      steps {
        sh './deploy-docker.sh'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
