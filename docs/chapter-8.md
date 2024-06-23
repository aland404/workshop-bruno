# Chapitre 7 - Librairies intergalactiques 💫
&nbsp;

#### Objectif de la Mission 🎯
- Découvrir l'utilisation de librairies


## Lirairies

### Librairies intégrées

Bruno propose une liste de librairie pré-intégrées à l'outil dont nous pouvons bénéficier immédiatement (cf [la liste exhaustive](https://docs.usebruno.com/scripting/inbuilt-libraries))

Le test pour valider la currentDate nous oblige a écrire beaucoup de code que l'on pourrait facilement remplacer par des fonctionnalités d'une librairie externe.

Utilisez la librairie intégrée `Moment` pour refactorer le test un peu long sur la currentDate.

```javascript
const { moment } = require("moment");

moment().format('L'); // affichage de la date du jour au format dd/mm/yyyy
```

### Librairies externes

