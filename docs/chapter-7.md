# Chapitre 7 - Le pouvoir de la CI 🤖⚡️
&nbsp;

#### Objectif de la Mission 🎯
- Découvrir Bruno CLI
- Réussir l'intégration de Bruno dans une pipeline de delivery
- Empêcher l'empire de revenir prendre sa revanche

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

Toutes vos requêtes et les tests correspondant s'exécutent, vous devriez voir quelque chose comme ceci:

<img src="./assets/chapter-7/bruno_cli_result_test_execution.png" width="400" height="400">


## Intégration dans une pipeline de delivery

### Avec Github

### Avec Gitlab

## Empêcher l'empire de revenir