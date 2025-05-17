# 🛠️ Subastas y Servicios Web3 – Backend (NestJS + Screaming Architecture)

Este es el backend del proyecto de plataforma digital de **subastas y contratación de servicios tipo Fiverr**. Utiliza **NestJS** con **arquitectura monolítica modular basada en Screaming Architecture**, integrando verificación de humanidad mediante **World ID** y pagos con **Worldcoin (WLD)**.

---

## 📦 Tecnologías principales

- ⚙️ NestJS (TypeScript)
- 🧠 Screaming Architecture
- 🔐 World ID (`@worldcoin/idkit`)
- 💸 Worldcoin (WLD) como método de pago
- 🗄️ PostgreSQL + Prisma ORM
- 🚀 Docker-ready (opcional)
- 🧪 Redis (opcional, para sesiones/subastas en vivo)

---

## 📁 Estructura de carpetas

```bash
src/
├── subastas/
├── servicios/
├── usuarios/
├── verificacion/
├── pagos/
├── notificaciones/
├── shared/
├── config/
```

Cada módulo contiene sus propios:

- `controllers/`
- `services/`
- `dto/`
- `entities/`

---

## ⚙️ Configuración `.env`

```env
DATABASE_URL="postgresql://user:password@localhost:5432/subastas"
JWT_SECRET="tu_clave_secreta"
WORLD_ID_APP_ID="tu_app_id_worldcoin"
```

---

## 🚀 Comandos útiles

```bash
# Inicializar Prisma
npx prisma init

# Generar migración inicial
npx prisma migrate dev --name init

# Iniciar el servidor en desarrollo
npm run start:dev
```

---

## 🌍 Endpoints principales

| Método | Ruta                 | Descripción                          |
| ------ | -------------------- | ------------------------------------ |
| POST   | /usuarios/register   | Registro de usuario                  |
| POST   | /verificacion/verify | Verificación de humanidad (World ID) |
| POST   | /subastas/crear      | Crear una subasta nueva              |
| POST   | /servicios/oferta    | Ofertar servicio o contraoferta      |
| POST   | /pagos/realizar      | Realizar pago en WLD                 |

---

## 🔗 Recursos

- [Worldcoin Developer Portal](https://developer.worldcoin.org/)
- [DoraHacks](https://dorahacks.io/)
- [NestJS Docs](https://docs.nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [WalletConnect](https://walletconnect.com/)

---

## 📝 Licencia

MIT License
