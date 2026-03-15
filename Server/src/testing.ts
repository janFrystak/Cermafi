import path from "path";
import fs from "fs";

const scriptPath = path.join(__dirname, '../../scripts/ImportToDB.py');
console.log("Checking script at:", scriptPath);

if (!fs.existsSync(scriptPath)) {
    console.error("CRITICAL: Python script not found at path!");
}