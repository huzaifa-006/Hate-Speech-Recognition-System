# ---------- Build Stage ----------
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of app and build
COPY . .
RUN npm run build

# ---------- Run Stage ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy built React files from build stage
COPY --from=build /app/build .

# Copy default nginx config (optional, only if needed)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
