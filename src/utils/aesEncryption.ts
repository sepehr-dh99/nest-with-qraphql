import crypto from "crypto"; // Built-in node crypto module

const algorithm = "aes-256-cbc"; // Algorithm to use for encryption
const key = "mihanSec@yarhis".padEnd(32, "\0"); // Secret key for encryption (keep this secret!)
const iv = crypto.randomBytes(16); // Initialization vector for encryption

// Encrypt a user token
export function encryptUserToken(token: string): string {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(token, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${encrypted}:${iv.toString("hex")}`;
}

// Decrypt an encrypted user token
export function decryptUserToken(encryptedToken: string): string {
  const [encrypted, ivHex] = encryptedToken.split(":");
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(ivHex, "hex")
  );
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
