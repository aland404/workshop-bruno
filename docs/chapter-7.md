# Chapitre 7 - Le pouvoir de la CI 🤖⚡️
&nbsp;

#### Objectif de la Mission 🎯
- Découvrir Bruno CLI
- Réussir l'intégration de Bruno dans une pipeline de delivery

## Bruno CLI

La Command Line Interface de Bruno permet d'exécuter une collection de requêtes.

[Documentation de la CLI Bruno](https://docs.usebruno.com/bru-cli/overview)

### Installation

```shell
yarn global add @usebruno/cli
#OR
npm install -g @usebruno/cli
#OR
pnpm add -g @usebruno/cli
```

### Executer une collection

Naviguez jusqu'au dossier où se trouve votre collection d'API Bruno puis lancez la commande:

```shell
# env_name est le nom que vous avez donné à votre environnement
# your_password est le mot de passe utilisé pour récupérer votre passport galactique
bru run --env env_name --env-var password=your_password
```

::: warning
Attention à bien vous positionner à la racine de votre collection Bruno, sinon la commande ne fonctionnera pas.

Bruno utilise un stockage sécurisé pour vos variables secrètes depuis l'interface utilisateur.
Pour pouvoir les utiliser depuis la CLI, vous devez les transmettre explicitement en tant que variable d'environnement.
:::

Toutes vos requêtes et les tests correspondants s'exécutent, vous devriez voir quelque chose comme ceci:

<img src="./assets/chapter-7/bruno_cli_result_test_execution.png" width="400" height="400">

Maintenant que nous savons nous servir de la CLI Bruno, nous pouvons l'intégrer dans une pipeline de delivery.

## Intégration dans une pipeline de delivery

Il est possible d'intégrer une étape d'exécution d'une collection Bruno via n'importe quelle solution d'automatisation CI/CD.

Nous prendrons en exemple celle proposée par Github avec les Github Actions.

### Avec Github

<br/>

#### Pré-requis

Pour pouvoir réaliser cette partie, il est nécessaire d'avoir un compte Github.

#### Création d'un repository Github

Créez un repository sur votre compte Github et déposez-y le dossier représentant votre collection Bruno.

#### Avant d'aller plus loin

- pour exécuter une collection, il faut avoir accès à l'API web que nous souhaitons tester
  - Github n'a pas accès à notre localhost
  - l'API doit être exposée sur le net
- les variables secrètes sont inaccessibles en dehors de l'interface graphique de Bruno
  - il faut les transmettre explicitement en tant que variable d'environnement
  - il ne faut pas que ces variables soient en clair dans nos fichiers

Il va donc falloir créer une variable secrète dans Github:

- sur votre repository cliquez `Settings` > `Secrets and Variables` > `Actions` > `New Repository Secret`
- appelez votre variable `GALACTIC_PASSPORT_PASSWORD`
- valorisez-la avec le mot de passe utilisez pour appelez votre requête pour récupérer un passeport galactique

Heureusement, un serveur distant est disponible:
- Créez un environnement Bruno `Tatooine` qui sera le même que votre précédent environnement
- Valorisez la variable `base_url` avec `https://male-ofelia-caq-40-9e85a7e6.koyeb.app`

#### Création d'une Github Actions

Les workflows GitHub Actions sont définis dans des fichiers YAML stockés dans le répertoire .github/workflows d'un repository.

- Créez un répertoire .github/workflows à la racine de votre répository.

- Ajoutez un fichier YAML pour votre workflow, par exemple `bru-cli-tests.yml`

Copiez/collez le contenu suivant dans votre fichier yml

<Solution title="Github action yml pour exécuter une collection Bruno">

```yaml
name: Bru CLI Tests

on:
  workflow_dispatch:
    inputs:
      build:
        description: 'Bru CLI - Tests'
        required: true
        default: 'true'
  pull_request:
    types: [ opened, synchronize, reopened ]

env:
  ENVIRONMENT: Tatooine
  PASSWORD: ${{ secrets.GALACTIC_PASSPORT_PASSWORD }}

# Assign permissions for unit tests to be reported.
# See https://github.com/dorny/test-reporter/issues/168
permissions:
  statuses: write
  checks: write
  contents: write
  pull-requests: write
  actions: write

jobs:
  test:
    name: Bruno CLI - Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install Bru CLI
        run: npm install -g @usebruno/cli
      - name: Display Bru CLI Version
        run: bru --version
      - name: Run tests
        run: |
          cd solutions
          npm install
          bru run --env ${{ env.ENVIRONMENT }} --output junit.xml --format junit --env-var password=${{ env.PASSWORD }}
      - name: Publish Test Report
        uses: dorny/test-reporter@v1
        if: success() || failure()
        with:
          name: Test Report
          path: solutions/junit.xml
          reporter: java-junit
```

</Solution>

