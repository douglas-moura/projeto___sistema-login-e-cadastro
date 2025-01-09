# Sistema de Autenticação

Exemplo de sistema de autenticação de usuários, implementado em TypeScript, HTML e CSS com o uso de Tailwind CSS. A configuração básica é voltada para o desenvolvimento de interfaces de login e registro, com suporte para validação de credenciais.

## Funcionalidades

- **Login e Registro**: Interface para entrada e criação de contas.
- **Confirmação de Senha em 2 Etapas**: O formulário de cadastro realiza verificação dupla para confirmar a senha.
- **Validação de Caracteres**: Garante que a senha atende aos critérios de segurança.
- **Confirmação de Termos e Condições**: Requer que o usuário concorde com os Termos antes de se cadastrar.
- **Estilização com Tailwind CSS**: Layout responsivo e personalizável.

## Pré-requisitos

- Node.js
- npm (ou yarn)

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/douglas-moura/login.git
cd login
npm install
```

## Executando servidor

```bash
npm install json-server
json-server --watch  ./db/db.json
```

## Uso

Execute o projeto com:

```bash
tsc -w
```

## Licença

Este projeto está licenciado sob a MIT License.

```csharp
Esse README agora inclui informações sobre as funcionalidades de validação e confirmação de cadastro.
```
