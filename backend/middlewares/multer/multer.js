import multer from "multer";
import path from "path";
import fs from "fs";

// ✅ Ensure folder exists
const ensureFolder = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const route = req.originalUrl;

        let folder = "uploads/others";

        if (route.includes("createCompany")) {
            folder = "uploads/companies";
        } else if (route.includes("createProduct")) {
            folder = "uploads/products";
        }

        const fullPath = path.join(process.cwd(), folder);
        ensureFolder(fullPath); // ✅ create folder if missing

        cb(null, fullPath);
    },

    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.test(ext)) cb(null, true);
    else cb(new Error("Only images allowed"));
};

export const upload = multer({ storage, fileFilter });
