# Chapitre 2 - Configuration ⚙️
&nbsp;

#### Objectif de la Mission 🎯
- Récupérer et démarrer l'API Star Wars
- Installer l'outil Bruno


## Pré-requis

Assurez-vous d'avoir [NodeJS](https://nodejs.org/en/) en version 16 ou supérieure

```shell
node -v # v16+
```

## Récupération de l'API Star Wars

- Clonez le code source du codelab

```shell
git clone https://github.com/aland404/star-wars-api.git
```

- Puis installez les dépendances

```shell
# yarn OR pnpm OR npm
yarn install
```

## Démarrage de l'API

```shell
# yarn OR pnpm OR npm
yarn run start
```

Vous devriez voir les logs suivants:

![Server started successfully](./assets/server_starts_with_success.png)

[La documentation de l'API](http://localhost:3000/api#/) maintenant accessible

## Installation de Bruno

- Installation via un gestionnaire de paquets

```shell
## MacOS
# Homebrew
brew install bruno

## Linux
# Snap
snap install bruno
# Apt
sudo mkdir -p /etc/apt/keyrings 
sudo gpg --no-default-keyring --keyring /etc/apt/keyrings/bruno.gpg --keyserver keyserver.ubuntu.com --recv-keys 9FA6017ECABE0266 

echo "deb [signed-by=/etc/apt/keyrings/bruno.gpg] http://debian.usebruno.com/ bruno stable" | sudo tee /etc/apt/sources.list.d/bruno.list 
 
sudo apt update 
sudo apt install bruno

## Windows
# Chocolatey
choco install bruno
# Scoop
scoop bucket add extras
scoop install bruno
```

- Installation via des binaires

Téléchargement sur le site [usebruno](https://www.usebruno.com/downloads)

## Démarrage de Bruno

Démarrez l'application Bruno

Vous devriez voir la page d'accueil de Bruno:

![Bruno home page](./assets/bruno_home_page.png)