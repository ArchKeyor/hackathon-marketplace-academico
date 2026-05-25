A U-Commerce é uma plataforma acadêmica criada para conectar estudantes dentro do ambiente universitário, permitindo a troca de conhecimento, materiais e serviços entre alunos de forma segura, acessível e colaborativa.

A proposta surgiu a partir de uma necessidade real vivida dentro da universidade: materiais acadêmicos que perdem utilidade rapidamente, dificuldades em encontrar ajuda para determinadas disciplinas e a falta de conexão entre alunos de diferentes cursos e períodos.

Nossa solução transforma esse cenário em um ecossistema colaborativo onde estudantes podem:

Comprar e vender materiais acadêmicos;
Oferecer mentorias;
Compartilhar conhecimento;
Encontrar suporte para disciplinas;
Trocar informações;
Construir uma rede acadêmica confiável.

🚀 Tecnologias
Front-end
React
Next.js
TailwindCSS
Back-end
Python
Django
Django REST Framework
Banco de Dados
PostgreSQL
Ferramentas
Git
GitHub
Figma

🌎 Impacto

A U-Commerce promove:

Economia circular acadêmica;
Reaproveitamento de materiais;
Incentivo à colaboração;
Integração entre cursos;
Acesso mais democrático ao aprendizado.
📱 Funcionalidades
Sistema de anúncios;
Catálogo de produtos e serviços;
Sistema de reputação;
Perfis acadêmicos;
Busca e filtros;
Recomendações;
Sistema de denúncias;
Mentorias entre alunos;

⚙️ Como Executar o Projeto com o Docker

Antes de começar, certifique-se de ter instalado o Docker Desktop e o Git em sua máquina. Abra o Docker Desktop e deixe-o rodando em segundo plano. Depois disso, clone o repositório com o comando:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

Agora execute os containers utilizando o Git Bash, terminal Linux ou terminal integrado do VSCode:

```bash
docker compose up
```

Após a inicialização dos containers, a aplicação estará disponível localmente.

Exemplo:

```txt
Frontend: http://localhost:3000
Backend: http://localhost:8000
```

Para encerrar a aplicação utilize:

```bash
docker compose down
```

Caso seja necessário reconstruir os containers:

```bash
docker compose up --build
```

------------------------------------------------------

⚙️ Como Executar o Projeto sem o Docker

Antes de começar, certifique-se de ter instalado:

- Node.js
- Python
- PostgreSQL
- Git

Primeiro, clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências do front-end:

```bash
npm install
```

Instale as dependências do back-end:

```bash
pip install -r requirements.txt
```

Configure as variáveis de ambiente do projeto criando o arquivo `.env`.

Depois disso, execute o front-end:

```bash
npm run dev
```

E execute o back-end:

```bash
python manage.py runserver
```

Após iniciar os serviços, a aplicação estará disponível localmente.

Exemplo:

```txt
Frontend: http://localhost:3000
Backend: http://localhost:8000
```

