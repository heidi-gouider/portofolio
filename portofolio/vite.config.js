// pour supprimer les hash lors du build avec yarn sur le nom des fichiers renomés
import { defineConfig } from 'vite';

// l'option output définit les noms de fichiers pour les sorties générées.
export default defineConfig({
  build: {
    rollupOptions: {
  input: {
    index: './commun/index.js',
    page1: './page1/page1.js',
    // page2: './page2/page2.js',
},
      output: {
        dir: "public",
        entryFileNames: `[name].js`,
//         chunkFileNames: `assets/[name].js`,
        assetFileNames: `[name].[ext]`
      },
      // external: ["bootstrap/dist/css/bootstrap.css"],

    },
  },
})
// L'option external permet de spécifier des dépendances externes qui ne doivent pas être incluses directement dans le bundle généré
