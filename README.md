# Stephie M design — Atelier Tentures de Joie

Site vitrine one-page responsive pour présenter et vendre des ateliers d’impression botanique sur textile au Pyla-sur-Mer, sur le Bassin d’Arcachon.

## Structure des fichiers

```text
.
├── index.html
├── styles.css
├── script.js
├── data/
│   └── sessions.json
└── public/
    └── images/
        └── README.md
```

## Lancer le site localement

Ce site est volontairement en HTML/CSS/JavaScript simple pour rester facile à publier sur GitHub Pages, Vercel ou Netlify.

Depuis la racine du projet :

```bash
python3 -m http.server 8080
```

Puis ouvrir :

```text
http://localhost:8080
```

> Important : utilisez un petit serveur local plutôt qu’une ouverture directe du fichier `index.html`, car le calendrier charge `data/sessions.json` avec `fetch()`.

## Modifier les prochaines dates

Les sessions sont configurées dans `data/sessions.json`.

Exemple :

```json
[
  {
    "date": "2026-07-10",
    "label": "Vendredi 10 juillet",
    "slots": [
      {
        "time": "10h - 13h",
        "available": true,
        "remainingPlaces": 6
      },
      {
        "time": "15h - 18h",
        "available": true,
        "remainingPlaces": 4
      }
    ]
  }
]
```

Règles pratiques :

- `date` : au format `YYYY-MM-DD`, utilisé pour masquer automatiquement les dates passées.
- `label` : texte affiché sur la carte de session.
- `time` : créneau affiché, par exemple `10h - 13h` ou `15h - 18h`.
- `available` : `true` pour ouvrir le créneau, `false` pour le rendre non cliquable.
- `remainingPlaces` : nombre de places restantes. Le site affiche automatiquement :
  - `Disponible` au-dessus de 2 places ;
  - `Bientôt complet` à 1 ou 2 places ;
  - `Complet` si `available` vaut `false` ou si `remainingPlaces` vaut `0`.

Si aucune date future n’est disponible, le site affiche le message prévu : « Les prochaines dates seront annoncées prochainement. Laissez-nous vos coordonnées pour être prévenu. »

## Ajouter les images

Placez les photos finales dans `public/images` avec ces noms :

- `hero-atelier-textile.jpg`
- `impression-botanique.jpg`
- `textile-lin-chanvre.jpg`
- `atelier-participants.jpg`
- `pyla-pinede.jpg`
- `creation-textile.jpg`
- `portrait-stephanie.jpg`

Tant qu’une photo est absente, le site affiche un aplat décoratif « Photo à ajouter ».

## Publication GitHub Pages

1. Pousser le dépôt sur GitHub.
2. Dans GitHub, aller dans **Settings > Pages**.
3. Choisir la branche à publier, par exemple `main`.
4. Choisir le dossier racine `/`.
5. Enregistrer : GitHub Pages publiera `index.html` avec `styles.css`, `script.js`, `data/sessions.json` et les images locales.

## Publication Vercel ou Netlify

- Importer le dépôt GitHub.
- Conserver les paramètres par défaut d’un site statique.
- Aucun build command n’est nécessaire.
- Le dossier de publication est la racine du projet.

## Informations à compléter

- Adresse exacte de l’atelier.
- Nombre de places définitif par session.
- Conditions d’annulation.
- Confirmation du matériel fourni.
- Mentions légales.
- Politique de confidentialité.
- Photos finales à utiliser dans `public/images`.
