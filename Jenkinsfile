pipeline {
  // Execute the Pipeline, or stage, on any available agent
  agent any
  options {
    // keep only 100 most recent builds, keep a build for 365 days
    buildDiscarder(logRotator(numToKeepStr: '100', daysToKeepStr: '365'))
    // Enable timestamps globally in build log console
    timestamps()
  }
  environment {
    MYREPO = 'kkzxak47/nextjs-app'
    GHCR_CREDENTIALS = credentials('github-next-600-token')
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
        echo 'tag ghcr.io'
        sh 'docker build -t ghcr.io/$MYREPO:$BUILD_NUMBER .'
        sh 'docker tag ghcr.io/$MYREPO:$BUILD_NUMBER ghcr.io/$MYREPO:latest'
      }
    }
    stage('ghcr.io') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          echo 'ghcr login'
          sh 'echo $GHCR_CREDENTIALS_PSW | docker login ghcr.io -u $GHCR_CREDENTIALS_USR --password-stdin'
          echo 'ghcr push'
          sh 'docker push ghcr.io/$MYREPO:$BUILD_NUMBER'
          sh 'docker push ghcr.io/$MYREPO:latest'
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
      echo 'ghcr.io logout'
      sh 'docker logout ghcr.io'
    }
  }
}
