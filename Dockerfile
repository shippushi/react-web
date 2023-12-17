# Gunakan image Node.js dari versi LTS
FROM node:18

# Setel direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install

# Salin seluruh kode aplikasi ke direktori kerja
COPY . .

# Expose port 3000 untuk server web
EXPOSE 3000

# Command untuk menjalankan aplikasi React
CMD ["npm", "start"]
