import { CaseItem } from "./types";

// Gerar lista de cases dinamicamente a partir da pasta `public/cases`.
// Este arquivo roda no server (Next.js app router), então podemos usar fs.
import fs from "fs";
import path from "path";

const ALLOWED_EXT = [".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif"];

function humanizeName(filename: string) {
  // remove extension e substitui underscores/traços por espaços
  const name = filename.replace(path.extname(filename), "");
  return name.replace(/[_-]+/g, " ").replace(/\b\w/g, (s) => s.toUpperCase());
}

export const useCases = (): CaseItem[] => {
  try {
    const dir = path.join(process.cwd(), "public", "cases");
    const all = fs.readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isFile())
      .map((d) => d.name)
      .filter((name) => ALLOWED_EXT.includes(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

    const items: CaseItem[] = all.map((file) => {
      const id = file.replace(path.extname(file), "").toLowerCase().replace(/[^a-z0-9]+/g, "_");
      return {
        id,
        src: `/cases/${file}`,
        alt: humanizeName(file)
      } as CaseItem;
    });

    return items;
  } catch (err) {
    // fallback para lista vazia caso a pasta não exista ou ocorra erro
    console.warn("useCases: não foi possível listar public/cases", err);
    return [];
  }
};

export default useCases;
