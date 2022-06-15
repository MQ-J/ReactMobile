## Alterar rotas com base no ambiente

Quando o modo do webpack for diferente de 'development', a rota é alterada para se encaixar no caminho dos arquivos no Github Pages. Trecho simplificado do arquivo Rotas.jsx a seguir:

```javascript
let basename = process.env.NODE_ENV == "development" ? "" : "/ReactMobile/dist"
<Router basename={basename}>
```

## Building and Running

Pressing the ▶ button will call the command `build` in `package.json`.  If `dist/bundle.js` file does not exist, it indicates this may be the first run and `install-dep` in `package.json` will be called. The `spck.config.json` file controls which command to call when pressing ▶ (which can be modified in **Run Settings**).

Some packages like `webpack`, `typescript`, `babel`, `react`, `ts-loader` have been installed globally to save space, unfortunately other packages do not work when installed globally and must be installed in the project folder such as `@babel/preset-env`, and `css-loader`.

The task `build` creates a development build of the project and generates:

- `dist/bundle.js`

When `build` finishes, the preview window will launch.

## Limitations in Android

Due to security restrictions in Android, execute permissions on write-allowed storage is likely forbidden on most stock devices. This prevents some npm scripts from working properly as `npm run` rely on the use of `sh` which requires exec permissions.

The `node` program is also built as a shared library for compatibility with future versions of Android and can only be accessed from the terminal and not `sh`.

For these reasons, using `npm run ...` will not work from the terminal, but entering the command (`webpack`) directly in the terminal will work.

## NPM Install

On external storage and SD cards, it is commonly using FAT32 or exFAT filesystems. These filesystems do not support symbolic links which is why npm dependencies that uses symlinks (mostly npm dependencies with command line usage symlinks) will fail on external storage.

Add the `--no-bin-links` option to `npm install` to prevent creation of symlinks.

```bash
npm i @babel/preset-env --no-bin-links
```
