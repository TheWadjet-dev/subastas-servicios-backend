-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nullifierHash" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subasta" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precioBase" DOUBLE PRECISION NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fechaLimite" TIMESTAMP(3) NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Subasta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicio" (
    "id" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pago" (
    "id" TEXT NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "token" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nullifierHash_key" ON "Usuario"("nullifierHash");

-- CreateIndex
CREATE UNIQUE INDEX "Pago_token_key" ON "Pago"("token");

-- AddForeignKey
ALTER TABLE "Subasta" ADD CONSTRAINT "Subasta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
