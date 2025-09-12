module.exports = {
  testEnvironment: "jsdom", // Configura el entorno de prueba
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"], // Archivos de prueba
  collectCoverage: true, // Habilita la recolección de cobertura
  coverageDirectory: "coverage", // Carpeta donde se guardará la cobertura
  coverageReporters: ["json", "lcov", "text", "clover"], // Formatos de reporte de cobertura
  moduleFileExtensions: ["js", "jsx", "json", "node"], // Extensiones de archivos soportadas
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest", // Usa babel-jest para transpilar archivos .js
  },
};