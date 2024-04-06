pipeline {
  // Execute the Pipeline, or stage, on any available agent
  agent any
  options {
    // keep only 100 most recent builds, keep a build for 365 days
    buildDiscarder(logRotator(numToKeepStr: '100', daysToKeepStr: '365'))
    // Enable timestamps in build log console
    timestamps()
  }
  environment {
    MYREPO = 'kkzxak47/nextjs-app'
    // DOCKERHUB_CREDENTIALS = credentials('05a4b886-4182-4540-8523-9b048ad075a2')
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
        sh 'docker build -t $MYREPO:$BUILD_NUMBER .'
        sh 'docker tag $MYREPO:$BUILD_NUMBER $MYREPO:latest'
      }
    }
    stage('DockerHub') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          echo 'ghcr login'
          sh 'echo $GHCR_CREDENTIALS_PSW | docker login ghcr.io -u $GHCR_CREDENTIALS_USR --password-stdin'
          echo 'ghcr push'
          sh 'docker push ghcr.io/kkzxak47/$MYREPO:$BUILD_NUMBER'
          sh 'docker push ghcr.io/kkzxak47/$MYREPO:latest'
          // echo 'dockerhub login'
//           sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          // echo 'dockerhub push'
//           sh 'docker push $MYREPO:$BUILD_NUMBER'
//           sh 'docker push $MYREPO:latest'
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
      echo 'dockerhub logout'
      sh 'docker logout'
    }
  }
}
