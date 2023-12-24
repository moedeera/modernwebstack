export function parseImports(code) {
  const lines = code.split("\n"); // Split the code by new lines
  const imports = []; // Array to hold the result

  lines.forEach((line) => {
    if (line.startsWith("import")) {
      // Check if the line is an import statement
      // Extracting the part between "import" and "from" as import names
      const importNamesPart = line
        .substring(line.indexOf("{") + 1, line.indexOf("}"))
        .trim();

      // Splitting the names by comma and trimming extra whitespace
      const importNames = importNamesPart.split(",").map((name) => name.trim());

      // Extracting the module name (the part after "from")
      const fromModuleName = line.substring(
        line.indexOf('"') + 1,
        line.lastIndexOf('"')
      );

      // Construct the object and add to the imports array
      imports.push({
        from: fromModuleName,
        imports: importNames,
      });
    }
  });

  return imports;
}

// String literal input
const code = `
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
`;

// Parsing the input
// const imports = parseImports(code);
// console.log(imports);
