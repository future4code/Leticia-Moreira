import { connection } from "./connection";

export function closeConnection(): void { connection.destroy(); }
