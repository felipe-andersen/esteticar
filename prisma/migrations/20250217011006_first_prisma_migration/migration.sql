-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "customer_public_id" TEXT DEFAULT gen_random_uuid(),
    "customer_name" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_public_id" UUID DEFAULT gen_random_uuid(),
    "user_name" TEXT NOT NULL,
    "user_default_email" TEXT NOT NULL,
    "user_alternative_email" TEXT,
    "user_default_celphone" TEXT NOT NULL,
    "user_alternative_celphone" REAL,
    "user_password_hash" TEXT,
    "user_status" VARCHAR NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customer_public_id_key" ON "Customer"("customer_public_id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customer_name_key" ON "Customer"("customer_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_public_id_key" ON "User"("user_public_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_default_email_key" ON "User"("user_default_email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_alternative_email_key" ON "User"("user_alternative_email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_default_celphone_key" ON "User"("user_default_celphone");
