# TMDB Movie App 🎬

Ez a projekt egy React-alapú webalkalmazás, amely a [TMDB API](https://www.themoviedb.org/) segítségével filmeket jelenít meg. 

## Funkciók ✨

- Főoldal : Népszerű Netflix filmek listázása.
- Film részletei : Egy adott film részletes adatainak megjelenítése (pl. cím, leírás, értékelés, megjelenési dátum).


## Használt technológiák 🛠️

- **React:** A felhasználói felület megvalósításához.
- **React Router:** Az oldalak közötti navigációhoz.
- **TMDB API:** A filmek adatainak lekéréséhez.
- **Tailwind CSS:** Az alkalmazás stílusainak kialakításához.
- **.env**: API titkosítás

## Telepítés és futtatás 🚀

1. **Követelmények:**
   - Node.js (ajánlott verzió: 16.x vagy újabb)
   - NPM vagy Yarn

2. **Projekt klónozása:**
   ```bash
   https://github.com/dajkagabi/vite-react-tmdb.git
   cd tmdb-movie-app
   
3. **Függőségek:**
   ```
   npm install
  
4. **TMDB API kulcs beállítása:**

   Hozz létre egy .env fájlt a projekt gyökerében, és add hozzá a következő sort
   ```
   VITE_TMDB_API_KEY=YOUR_API_KEY
