# Documentação da API

## Autenticação com Firebase

O aplicativo utiliza Firebase Authentication para gerenciar o processo de autenticação dos usuários. Abaixo estão os detalhes das funcionalidades de login, cadastro e redefinição de senha, incluindo exemplos de uso.

### Login

- **Descrição**: Autentica um usuário existente utilizando o Firebase Authentication.
- **Parâmetros**:
  - `email`: Email do usuário.
  - `password`: Senha do usuário.
- **Exemplo de Uso**:

  ```javascript
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../config/Firebaseconfig";

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuário autenticado com sucesso
        const user = userCredential.user;
        // Salvando estado de login no AsyncStorage
        AsyncStorage.setItem("logged", "true");
        // Navegar para a página inicial
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Erro", "Email ou senha inválidos");
      });
  };
  ```

### Cadastro

- **Descrição**: Cria uma nova conta de usuário utilizando o Firebase Authentication.
- **Parâmetros**:
  - `email`: Email do usuário.
  - `password`: Senha do usuário.
- **Exemplo de Uso**:

  ```javascript
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../config/Firebaseconfig";

  const handleCreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Conta criada com sucesso
        const user = userCredential.user;
        // Salvando estado de login no AsyncStorage
        AsyncStorage.setItem("logged", "true");
        // Navegar para a página inicial
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Erro", errorMessage);
      });
  };
  ```

### Redefinição de Senha

- **Descrição**: Envia um email de redefinição de senha utilizando o Firebase Authentication.
- **Parâmetros**:
  - `email`: Email do usuário.
- **Exemplo de Uso**:

  ```javascript
  import { sendPasswordResetEmail } from "firebase/auth";
  import { auth } from "../config/Firebaseconfig";

  const esqueceu = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Email de redefinição enviado com sucesso
        Alert.alert("Email enviado", "Verifique sua caixa de entrada.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Erro", "Email não encontrado");
      });
  };
  ```

## Endpoints

### Embarcações

- **URL**: `/embarcacoes`
- **Método HTTP**: `GET`
- **Descrição**: Retorna a lista de embarcações.
- **Exemplo de Requisição**:
  ```bash
  GET http://192.168.15.58:80/embarcacoes
  ```
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 1,
      "nome": "Embarcação 1",
      "tipo": "Cargueiro",
      "bandeira": "Brasil",
      "capacidade": 10000,
      "anoFabricacao": 2015,
      "proprietario": {
        /*Informações
            Do
            Propriettário
          */
      }
    }
  ]
  ```

### Incidentes

- **URL**: `/incidentes`
- **Método HTTP**: `GET`
- **Descrição**: Retorna a lista de incidentes.
- **Exemplo de Requisição**:
  ```bash
  GET http://192.168.15.58:80/incidentes
  ```
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 1,
      "data": "2024-05-30",
      "descricao": "Vazamento de óleo",
      "tipoPoluicao": "Óleo",
      "severidade": "Alta",
      "embarcacao": {
        "id": 1,
        "nome": "Embarcação 1"
      }
    }
  ]
  ```
