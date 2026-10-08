# Biscotti

_E se le uova non pesassero 60 grammi?_

Le ricette sono scritte per ingredienti "standard", ma l'uovo che hai in mano pesa 53 grammi, o ti sono rimasti solo 80 grammi di burro. Biscotti è una piccola web app con le mie ricette di biscotti (e qualche impasto di casa): inserisci il peso reale di un ingrediente e tutti gli altri si ricalcolano in proporzione.

👉 **Provala su [biscotti.marcozampini.it](https://biscotti.marcozampini.it/)**

## Come funziona

1. Dalla home scegli una ricetta.
2. Scrivi il peso di un qualsiasi ingrediente: quello che hai davvero, non quello della ricetta.
3. Le quantità degli altri ingredienti si aggiornano mantenendo le proporzioni originali, arrotondate al grammo.
4. **Reset** riporta la ricetta alle dosi di partenza.

Gli ingredienti senza peso (lievito, sale, "q. b.") restano in fondo alla ricetta e non vengono ricalcolati.

## Le ricette

- Biscotti cioccolato e mirtilli
- Biscotti alla nocciola
- Biscotti cocco e cioccolato
- Biscotti per le mie bambine (datteri e uvetta)
- Gocciole
- Gocciole di papà
- Biscotti al sesamo
- Pastafrolla con poco zucchero e poco burro
- Fogassa sula gradela
- Pasta brisée

## Aggiungere una ricetta

Tutte le ricette stanno in [`src/recipes.json`](src/recipes.json). Per aggiungerne una basta aggiungere un oggetto all'array: la pagina e il link in home vengono creati automaticamente.

```json
{
  "_id": "rec-10",
  "title": "Biscotti al limone",
  "slug": "biscotti-al-limone",
  "ingredients": [
    { "_id": "ing-0", "name": "eggs", "description": "Uova", "quantity": 60 },
    { "_id": "ing-1", "name": "flour", "description": "Farina", "quantity": 150 }
  ],
  "ingredientsWithoutWeight": [
    { "_id": "ingww-0", "name": "lemon-zest", "description": "Scorza di limone", "quantity": "q. b." }
  ]
}
```

- `_id` e `slug` devono essere unici tra tutte le ricette; lo `slug` diventa l'indirizzo della pagina (`/biscotti-al-limone`).
- Dentro una ricetta, `_id` e `name` di ogni ingrediente devono essere unici.
- `quantity` è in grammi ed è un numero per gli `ingredients`, un testo libero per gli `ingredientsWithoutWeight`.

## Sviluppo

Serve Node.js. Il progetto è basato su [Create React App](https://create-react-app.dev/) con React 19 e React Router 7.

```sh
npm install
npm start          # avvia l'app su http://localhost:3000
npm test           # esegue i test
npm run build      # crea la versione di produzione in build/
```
