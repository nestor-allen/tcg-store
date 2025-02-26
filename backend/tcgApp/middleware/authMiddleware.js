import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();

/**
 * Middleware to Verify JWT Token
 */
export function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedUser) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    
    // Fetch the full user info from the database
    const user = await prisma.user.findUnique({ where: { id: decodedUser.id } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // Attach full user data to request
    next();
  });
}

/**
 *  Middleware to Check Admin Role
 */
export function isAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }
  next();
}
