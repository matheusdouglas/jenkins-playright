pipeline {
  agent any

  stages {
    stage('Install Playwright') {
      steps {
        bat '''
          npm install -D @playwright/test
          npx playwright.cmd install
        '''
      }
    }

    stage('Help') {
      steps {
        bat 'npx playwright.cmd test --help'
      }
    }

    stage('Test') {
      steps {
        bat '''
          npx playwright.cmd test --list
          npx playwright.cmd test
        '''
      }
      post {
        success {
          archiveArtifacts artifacts: 'homepage-*.png', followSymlinks: false
          bat 'del homepage-*.png'
        }
      }
    }
  }
}
