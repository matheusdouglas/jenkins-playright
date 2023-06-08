pipeline {
  agent any

  stages {
    stage('Install Playwright') {
      steps {
        sh '''
          npm install -D @playwright/test
          npx playwright install
        '''
      }
    }

    stage('Help') {
      steps {
        sh 'npx playwright test --help'
      }
    }

    stage('Test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts artifacts: 'homepage-*.png', followSymlinks: false
          sh 'rm -rf *.png'
        }
      }
    }
  }
}
