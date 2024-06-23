# Chapitre 8 - Librairies intergalactiques 💫
&nbsp;

#### Objectif de la Mission 🎯
- Découvrir l'utilisation des librairies


## Lirairies

Il est possible d'utiliser des librairies JS dans les onglets `Script` et/ou `Tests` de Bruno pour se faciliter la vie.

### Librairies intégrées

Bruno propose une liste de librairie JavaScript pré-intégrées que vous pouvez utiliser directement (cf [la liste exhaustive](https://docs.usebruno.com/scripting/inbuilt-libraries)).

Le test pour valider la date du jour (`currentDate`) nous oblige a écrire beaucoup de code que l'on pourrait facilement remplacer par des fonctionnalités d'une librairie externe.

--> Utilisez la librairie intégrée `Moment` pour refactorer la méthode `getCurrentDateFormatted` utilisée dans le test sur la date du jour.

```javascript
const moment = require("moment")

// affichage de la date du jour au format dd/mm/yyyy
moment().format('L')
```

<Solution>

```javascript
const moment = require("moment")

function getCurrentDateFormatted() {
    return moment().format('L')
}
```

</Solution>

### Librairies externes

Vous n'aimez pas la librairie `Moment` ? Vous préférez `dayjs` ?

Cela tombe bien, Bruno prend également en charge le chargement de n'importe quel module npm (cf [doc](https://docs.usebruno.com/scripting/external-libraries)).

Vous devrez simplement ajouter un fichier package.json là où votre collection est stockée et déclarer la dépendance de la librairie désirée.

#### Utiliser `dayjs` à la place de `Moment`

- créez un fichier package.json là où est stockée votre collection
  - `npm init` (ou `yarn init` ou `pnpm init`)
- ajoutez la dépendance dayjs dans le package.json
  - `npm install dayjs` (ou `yarn add dayjs` ou `pnpm add dayjs`)
- utilisez `dayjs` à la place de `Moment`
  - `dayjs().format('DD/MM/YYYY')`

<Solution>

``` javascript
const dayjs = require("dayjs")

function getCurrentDateFormatted() {
  return dayjs().format('DD/MM/YYYY')
}
```

</Solution>


## C'est fini! 😱

Et voilà, vous êtes arrivés au bout de ce workshop, félicitations 🎉

J'espère que vous avez appris tout en vous amusant, n'hésitez pas à starer [le projet sur github](https://github.com/aland404/workshop-bruno) si ce projet vous a apporté quelque chose.

___Bonne continuation à vous, et vive la rébellion 👋___