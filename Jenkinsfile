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
    }

    stage('Publish Extent Report'){
            steps{
                     publishHTML([allowMissing: false,
                                  alwaysLinkToLastBuild: false, 
                                  keepAll: true, 
                                  reportDir: 'build', 
                                  reportFiles: 'TestExecutionReport.html', 
                                  reportName: 'HTML Extent Report', 
                                  reportTitles: ''])
            }

  }
}