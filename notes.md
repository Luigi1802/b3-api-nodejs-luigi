# Introduction

**Firebase** - Backend as a service -> BDD et backend gérable via une interface de monitoring

**NodeJS** - Environnement d'execution opensource de JavaScript, porté par ses dépendances/librairies

**TypeScript** - sur-couche de typage pour le langage JavaScript : code TypeScript typé -> "compilé" en JavaScript

**Chocolatey** - gestionnaire de paquets pour Windows (installation de logiciels par ligne de commande)

**Slidev** - Création de diaporamas/présentation en **markdown**

## Projet Node

- npm init à la racine du projet
- un créé package.json est créé avec les dépendances, scripts...
  
## Javascript

*exemples de code dans ./exemples.js*

variable 
-> jamais var, plutôt let/const : let pour une variable classique, const pour une constante

fonctions -> plusieurs synthaxes (function, ()=>{}, ...)

import en js 
-> deux méthodes : 
- CJS (commonJS, synthaxe par défaut ancienne) : `const fs = require('fs');`
- ESM (ECMAScript modules, plus moderne) : `import * as fs from 'node:fs';`

### Synthaxe Import/Export

Dans un premier temps nous allons convertir nos fichiers en modules. (module ESM):
- on peut soit modifier l'extension de nos fichiers en .mjs
- soit ajouter "type": "module" dans notre package.json

```json
"type": "module
```

Import nommé (pour les 'export')

```js
import {main} from './utils';
```

Import défault (pour les 'export default')

```js
import utils from './utils';
```

## Express

### Routes

Défintion d'endpoints : URL et méthode HTTP

```js
app.get("/", (req, res)=>{
    testUtils();
    res.send('<h1>Hello World</h1>');
});
```

Ci-dessus la fonction de callback peut être considérée comme un **middleware**.