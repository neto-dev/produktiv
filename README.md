# Produktiv

> Aplicación para el manejo de tus tareas diarias.

#### Build Setup

#### Enviroment Variables

Se tiene que crear un archivo llamado variables.env en la raíz del proyecto.

``` Configuration Firabase
// Previamente se Tiene que crear un proyecto en firebase, las credenciales generadas de firebaseConfig agregarlos de la siguiente manera en el archivo variables.env

# variables.env

export VUE_apiKey = "apikey-generate"
export VUE_authDomain = "authDomain-generate"
export VUE_databaseURL = "databaseURL-generate"
export VUE_projectId = "projectId-generate"
export VUE_storageBucket = "storageBucket-generate"
export VUE_messagingSenderId = "messagingSanderId-generate"
export VUE_appId = "appId-generate"
export VUE_measurementId = "measurementId-generate"

```

Despues de agregar la información en nuestro archivo variables.env ejecutamos el siguiente comando para agregar las variables y nuestro sistema pueda consultarlas.

```
$ source variables.env
```

---

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

---

Ernesto Valenzuela [Portfolio](https://netov.dev)
