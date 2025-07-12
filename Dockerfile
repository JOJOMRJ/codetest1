# 使用 Alpine 版本（更小、更安全）
FROM node:22-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有代码
COPY . .
