# EcoWater Embarcações
<img src="assets/LogoReadme.png" width=480 />

## Visão Geral
EcoWater Embarcações é uma plataforma inovadora e abrangente dedicada ao monitoramento ambiental e gerenciamento sustentável das atividades marítimas. Nosso objetivo é proporcionar um sistema eficiente e preciso para o controle da poluição marinha, garantindo a preservação dos nossos oceanos e a sustentabilidade das operações das embarcações.

## Funcionalidades Principais
- **Monitoramento em Tempo Real**: Coleta e processamento de dados de poluição em tempo real utilizando sensores de última geração.
- **Registro e Gerenciamento de Embarcações**: Adição e gerenciamento de informações detalhadas sobre embarcações.
- **Detecção e Registro de Incidentes**: Registro manual e automático de incidentes de poluição.
- **Relatórios e Análises**: Geração de relatórios periódicos e análise de tendências de poluição.
- **Alertas em Tempo Real**: Notificações imediatas quando níveis críticos de poluição são detectados.

## Estrutura do Projeto
- `components/`: Componentes reutilizáveis como Header e Footer.
- `config/`: Configurações do Firebase.
- `data/`: Dados estáticos, como `dadosEmbarcacoes`.
- `screens/`: Telas principais da aplicação.
  - `Cadastro.jsx`: Cadastro de usuário pelo firebase.
  - `Embarcacoes.jsx`: Requisição GET para API do Java Spring para listar Embarcações.
  - `Home.jsx`: Tela inicial explicativa.
  - `Incidentes.jsx`: Requisição GET para API do Java Spring para listar Incidentes. 
  - `Login.jsx`: Login de usuário pelo firebase.
  - `Logout.jsx`: Remoção da autenticação.
  - `Monitoramento.jsx`: Requisição GET para API do Java Spring para Monitorar e Analisar gráficos. 
- `routes/`: Configuração das rotas de navegação.
- `assets/`: Imagens e outros recursos estáticos.

## Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/leoleoyuuki/ecowater.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd ecowater
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o aplicativo:
    ```bash
    npm run start
    ```

## Uso
- **Cadastro**: Tela para criar uma nova conta.
- **Login**: Tela para autenticação do usuário.
- **Home**: Tela inicial após login bem-sucedido.
- **Embarcações**: Exibição das embarcações registradas.
- **Incidentes**: Exibição dos incidentes registrados.
- **Monitoramento**: Monitoramento dos níveis de poluição em tempo real.

## Contato
Para mais informações, visite nosso [site](http://172.210.12.65:8081) ou entre em contato pelo e-mail [leo.yuuki@icloud.com](mailto:leo.yuuki@icloud.com).
**obs:** Esse link te levará para um "improviso" de página web de um App Mobile, para uma melhor experiência no teste, ao entrar no link, aperte `**F12**` no topo de seu teclado, isso abrirá um "DevTools" em seguida você pressione junto **`Ctrl + Shift + M`**, isso fará com que o website fique em formato de celular.

### Integrantes do Grupo
 - `Leonardo Yuuki – rm550373 - 2TDSPF`
 - `Gustavo Moreira - rm97999 - 2TDSPF`
 - `Leonardo Blanco – rm99119 - 2TDSPF`
 - `Paulo Henrique – rm98082 - 2TDSPF`
 - `Daniel Soares -rm552184 - 2TDSPF`
