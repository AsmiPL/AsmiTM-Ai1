# 1. Wybierz wersję Node.js (np. 20)
FROM node:20-slim

# 2. Ustaw katalog roboczy wewnątrz kontenera
WORKDIR /usr/src/app

# 3. Skopiuj pliki z listą bibliotek
COPY package*.json ./

# 4. Zainstaluj biblioteki (npm install)
RUN npm install --only=production

# 5. Skopiuj resztę kodu Twojej aplikacji
COPY . .

# 6. (Opcjonalnie) Jeśli używasz TypeScript lub React, dodaj komendę build:
# RUN npm run build

# 7. Cloud Run wymaga, aby aplikacja słuchała na porcie zdefiniowanym w zmiennej środowiskowej PORT
ENV PORT 8080
EXPOSE 8080

# 8. Uruchom aplikację (upewnij się, że w package.json masz skrypt "start")
CMD [ "npm", "start" ]
