pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '135', daysToKeepStr: '135'))
    timestamps()
  }
  environment {
    MYREPO = 'kkzxak47/nextjs-app'
    DOCKERHUB_CREDENTIALS = credentials('05a4b886-4182-4540-8523-9b048ad075a2')
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
        sh 'yarn build'
      }
    }
    stage('Image') {
      steps {
        sh 'docker build -t $MYREPO:$BUILD_NUMBER .'
        sh 'docker tag $MYREPO:$BUILD_NUMBER $MYREPO:latest'
      }
    }
    stage('DockerHub') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          echo 'dockerhub login'
          // sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          echo 'dockerhub push'
          // sh 'docker push $MYREPO:$BUILD_NUMBER'
          // sh 'docker push $MYREPO:latest'
        }
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
      echo 'docker logout'
      // sh 'docker logout'
    }
  }
}
