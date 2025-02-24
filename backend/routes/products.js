import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Get all products
router.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// Get single product by ID
router.get("/:id", async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: req.params.id },
  });

  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// Create a product
router.post("/", async (req, res) => {
  const { name, price, imageUrl } = req.body;

  const product = await prisma.product.create({
    data: { name, price, imageUrl },
  });

  res.status(201).json(product);
});

// Delete a product
router.delete("/:id", async (req, res) => {
  await prisma.product.delete({ where: { id: req.params.id } });
  res.json({ message: "Product deleted" });
});

export default router;
