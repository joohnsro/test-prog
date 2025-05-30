# 📋 Projeto Recrutamento & Seleção

Este repositório contém a implementação de um sistema de **Recrutamento e Seleção**, com **backend** em Go (framework Gin) e **frontend** em TypeScript (React + Vite). O objetivo é gerir candidatos, vagas e etapas de processo seletivo de forma simples e organizada.

1. Tela de cadastro (EMAIL e SENHA)
2. Tela de login (EMAIL e SENHA)
3. Tela quando logado

Atualizar a tela não posso perder o login, quando logado não posso entrar na tela de login e registro.

## NÃO UTILIZE NEXT.JS


---

## 📚 Tecnologias

### Backend
- [Go](https://golang.org/)  
- [Gin Web Framework](https://github.com/gin-gonic/gin)  
- [GORM](https://gorm.io/)  
- PostgreSQL  

### Frontend
- [TypeScript](https://www.typescriptlang.org/)  
- [React](https://reactjs.org/)  
- [Vite](https://vitejs.dev/)  
- [Axios](https://github.com/axios/axios)  

---

## Utilização da Aplicação

1 - Para executar a aplicação é necessário acessar a raíz do repositório e utilizar o seguinte comando:
```
docker compose -p recrutamento-e-selecao -f ./docker/docker-compose.yaml up -d
```

2 - Após os containers subirem é só acessar o endereço a seguir:<br />
[http://localhost:8080](http://localhost:8080)

***Observação:*** para executar a aplicação do frontend separamente em modo de desenvolvimento será necessário antes instalar as dependências:
```
npm install // Instala dependências
npm run dev // Executa em modo de desenvolvimento
```