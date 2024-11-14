import { crypto } from "@std/crypto";

const text = "Hello, Deno 2.0!";

const encoder = new TextEncoder();

const data = encoder.encode(text);

const key = await crypto.subtle.generateKey(
	{ name: "AES-GCM", length: 256 }, // 256-bit encryption key for strong security
	true, // The key is extractable for encryption and decryption
	["encrypt", "decrypt"], // Key usages: encryption and decryption
);

const iv = crypto.getRandomValues(new Uint8Array(12)); // 12-byte IV for AES-GCM

const encryptedData = await crypto.subtle.encrypt(
	{
		name: "AES-GCM",
		iv,
	},
	key,
	data,
);

console.log(`Encrypted Data: ${new Uint8Array(encryptedData)}`); // Log the encrypted result as a byte array

const decryptedData = await crypto.subtle.decrypt(
	{
		name: "AES-GCM",
		iv, // Same IV used for encryption
	},
	key, // The same key used for encryption
	encryptedData, // The encrypted data to decrypt
);

const decryptedText = new TextDecoder().decode(decryptedData);

console.log(`Decrypted Text: ${decryptedText}`);
