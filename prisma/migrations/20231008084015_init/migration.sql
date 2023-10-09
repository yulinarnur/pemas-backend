-- CreateTable
CREATE TABLE "Users" (
    "nik" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "telp" VARCHAR(13) NOT NULL,
    "username" VARCHAR(45) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("nik")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
