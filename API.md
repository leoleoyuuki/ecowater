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
  GET http://172.210.12.65:80/embarcacoes
  ```
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 7,
      "nome": "Navio Mercante",
      "tipo": "Cargueiro",
      "bandeira": "Thailandia",
      "capacidade": 20000.0,
      "anoFabricacao": 2010,
      "proprietario": {
        "id": 1,
        "nome": "João Silva",
        "endereco": "Rua das Flores, 123, São Paulo, SP",
        "telefone": "(11) 98765-4321",
        "email": "joao.silva@example.com"
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
  GET http://172.210.12.65:80/incidentes
  ```
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 7,
      "embarcacao": {
        "id": 7,
        "nome": "Navio Mercante",
        "tipo": "Cargueiro",
        "bandeira": "Thailandia",
        "capacidade": 20000.0,
        "anoFabricacao": 2010,
        "proprietario": {
          "id": 1,
          "nome": "João Silva",
          "endereco": "Rua das Flores, 123, São Paulo, SP",
          "telefone": "(11) 98765-4321",
          "email": "joao.silva@example.com"
        }
      },
      "data": "2024-06-01",
      "descricao": "Derramamento de óleo na costa",
      "tipoPoluicao": "Óleo",
      "severidade": "Alta"
    }
  ]
  ```

### Monitoramento

- **URL**: `/monitoramentos`
- **Método HTTP**: `GET`
- **Descrição**: Retorna a lista de monitoramento.
- **Exemplo de Requisição**:
  ```bash
  GET http://172.210.12.65:80/monitoramentos
  ```
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 8,
      "embarcacao": {
        "id": 7,
        "nome": "Navio Mercante",
        "tipo": "Cargueiro",
        "bandeira": "Thailandia",
        "capacidade": 20000.0,
        "anoFabricacao": 2010,
        "proprietario": {
          "id": 1,
          "nome": "João Silva",
          "endereco": "Rua das Flores, 123, São Paulo, SP",
          "telefone": "(11) 98765-4321",
          "email": "joao.silva@example.com"
        }
      },
      "sensor": {
        "id": 7,
        "tipo": "Temperatura",
        "localizacao": "Sala de servidores",
        "dataInstalacao": "2024-05-15",
        "status": "Ativo"
      },
      "data": "2024-06-01",
      "hora": "14:30",
      "localizacao": "Costa Oeste",
      "nivelPoluicao": 3.5
    }
  ]
  ```
