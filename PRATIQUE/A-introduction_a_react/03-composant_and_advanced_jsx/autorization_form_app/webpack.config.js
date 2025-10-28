const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Les fichiers .js et .jsx seront traités
        exclude: /node_modules/, // Exclure les fichiers dans node_modules
        use: {
          loader: 'babel-loader', // Utiliser babel-loader pour transpiler le code JavaScript/JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Utiliser les presets env et react de Babel
          },
        },
      },
      // Ajoutez d'autres règles ici pour d'autres types de fichiers si nécessaire
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Permet d'importer des fichiers .js et .jsx sans spécifier l'extension
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
};