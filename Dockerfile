# Wybierz obraz bazowy
FROM node:18

# Ustaw folder roboczy
WORKDIR /app

# Skopiuj pliki zależności
COPY package*.json ./

# TWOJA KOMENDA BUILD (odpowiednik build command z Rendera)
RUN npm install
RUN npm run build

# Skopiuj resztę plików
COPY . .

# Uruchom aplikację
CMD ["npm", "start"]
