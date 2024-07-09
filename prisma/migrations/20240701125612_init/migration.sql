-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adress" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Colis" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "Client" TEXT NOT NULL,
    "Programme" TEXT NOT NULL,

    CONSTRAINT "Colis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramVoyage" (
    "id" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "dateVoyage" TIMESTAMP(3),
    "StartTrip" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "driver" TEXT NOT NULL,

    CONSTRAINT "ProgramVoyage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Destination" (
    "id" TEXT NOT NULL,
    "nomVille" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WithDraw" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "colis" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,

    CONSTRAINT "WithDraw_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_telephone_key" ON "Client"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_telephone_key" ON "Driver"("telephone");

-- AddForeignKey
ALTER TABLE "Colis" ADD CONSTRAINT "Colis_Client_fkey" FOREIGN KEY ("Client") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colis" ADD CONSTRAINT "Colis_Programme_fkey" FOREIGN KEY ("Programme") REFERENCES "ProgramVoyage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramVoyage" ADD CONSTRAINT "ProgramVoyage_driver_fkey" FOREIGN KEY ("driver") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramVoyage" ADD CONSTRAINT "ProgramVoyage_designation_fkey" FOREIGN KEY ("designation") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WithDraw" ADD CONSTRAINT "WithDraw_client_fkey" FOREIGN KEY ("client") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WithDraw" ADD CONSTRAINT "WithDraw_colis_fkey" FOREIGN KEY ("colis") REFERENCES "Colis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
