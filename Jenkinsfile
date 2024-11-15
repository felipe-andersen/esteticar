
// servidor do jenkins > para o servidor de produção
// secrets, pipeline, monitora o repositorio (ele monitora o dockerhub?) 
// pega os meu containers, minhas secrets e conecta com meus serviços (ec2, kubernets)

pipeline {
    agent any

    environment {
        // 1. Define variáveis de ambiente pegar as secrets
        NODE_ENV = 'production'
    }

    stages {
        
        stage('Checkout') {
            steps {
                // 2. Pega o código do repositório
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // 3. Instala as dependências do projeto
                script {
                    // Certifique-se de que o Node.js está instalado no agente Jenkins
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                // 4. Compila o projeto para produção
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // 5. Executa testes
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Publicar o docker image no docker hub ou registry') {
            when {
                branch 'main' // 6. Realiza o deploy apenas se estiver na branch principal
            }
            steps {
                // 7. Script de deploy (exemplo com Docker)
                script {
                    sh '''
                    docker compose up 
                    // docker build -t myapp:latest .
                    // docker run -d -p 80:80 myapp:latest
                    '''
                }
            }
        }

        stage('Deploy | Conectanto com o cloud provider') {
            when {
                branch 'main' // 6. Realiza o deploy apenas se estiver na branch principal
            }
            steps {
                // 7. Script de deploy (exemplo com Docker)
                script {
                    sh '''
                    docker compose up 
                    // docker build -t myapp:latest .
                    // docker run -d -p 80:80 myapp:latest
                    '''
                }
            }
        }

        stage('Deploy ') {
            when {
                branch 'main' // 6. Realiza o deploy apenas se estiver na branch principal
            }
            steps {
                // 7. Script de deploy (exemplo com Docker)
                script {
                    sh '''
                    docker compose up 
                    // docker build -t myapp:latest .
                    // docker run -d -p 80:80 myapp:latest
                    '''
                }
            }
        }

        stage('Conectar com a cdn ') {
            when {
                branch 'main' // 6. Realiza o deploy apenas se estiver na branch principal
            }
            steps {
                // 7. Script de deploy (exemplo com Docker)
                script {
                    sh '''
                    docker compose up 
                    // docker build -t myapp:latest .
                    // docker run -d -p 80:80 myapp:latest
                    '''
                }
            }
        }
    }

    post {
        always {
            // 8. Limpa os recursos, como remover imagens temporárias ou arquivos de build
            cleanWs()
        }
        success {
            // 9. Notifica sucesso
            echo 'Build e deploy concluídos com sucesso.'
        }
        failure {
            // 10. Notifica falha
            echo 'A pipeline falhou. Verifique os logs para detalhes.'
        }
    }
}
