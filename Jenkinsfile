pipeline {
    agent any

    environment {
        NODE_VERSION = '20.11.1' // Adjust according to your Node version
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 20.11.1', configId: 'your-nodejs-installation-id') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 20.11.1', configId: 'your-nodejs-installation-id') {
                    sh 'npm run run-tests'
                }
            }
        }

        stage('Generate HTML Report') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 20.11.1', configId: 'your-nodejs-installation-id') {
                    sh 'npm run generate-multi-cucumber-html-report'
                }
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'reports',
                    reportFiles: 'report.html/index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/cucumber-json/*.json', allowEmptyArchive: true
            junit 'cypress/results/*.xml'
        }
        cleanup {
            cleanWs()
        }
    }
}
