pipeline {
    agent any

    environment {
        GIT_CREDENTIALS_ID = 'github-token'
        REPO_URL = 'https://github.com/ririnandayani/uts_devops.git'
     tools {
        nodejs "Nodejs 18" 
    }


    stages {
        stage('Checkout') {
            steps {
                git credentialsId: "${GIT_CREDENTIALS_ID}", url: "${REPO_URL}", branch: 'development'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        

        stage('Build Static Site') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to GitHub Pages') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                withCredentials([string(credentialsId: 'github-token', variable: 'GH_TOKEN')]) {
                    sh '''
                        echo $GH_TOKEN
                        git config --global user.name "ririn"
                        git config --global user.email "ririn.andayani77@gmail.com"
                        git remote set-url origin https://$GH_TOKEN@github.com/ririnandayani/uts_devops.git
                         # Hapus branch lokal 'gh-pages' jika ada
                        git branch -D gh-pages || echo "Branch gh-pages tidak ada."

                        # Deploy ke GitHub Pages
                        npx gh-pages -d build

                    '''
                }
            }
        }
    }
}