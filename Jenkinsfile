pipeline {
    agent any

    environment {
        NODE_VERSION = '20.11.1' // Adjust according to your Node version
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from your repository
                git 'https://dev.azure.com/CTS-Edison/CorporateTrust/_git/Cashlog-Automation'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm dependencies
                nodejs(NODE_VERSION) {
                    sh 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                nodejs(NODE_VERSION) {
                    sh 'npm run run-tests'
                }
            }
        }

        stage('Generate HTML Report') {
            steps {
                // Generate HTML report
                nodejs(NODE_VERSION) {
                    sh 'npm run generate-multi-cucumber-html-report'
                }
            }
        }

        stage('Publish HTML Report') {
            steps {
                // Publish HTML report using Jenkins' Publish HTML Plugin
                publishHTML (target: [
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
            // Archive test results and any other necessary steps
            archiveArtifacts artifacts: 'cypress/cucumber-json/*.json', allowEmptyArchive: true
            junit 'cypress/results/*.xml'
        }
        cleanup {
            cleanWs()
        }
    }
}
