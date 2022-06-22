## **Alterar rotas com base no ambiente**

Quando o modo do webpack for diferente de 'development', a rota é alterada para se encaixar no caminho dos arquivos no Github Pages. Trecho simplificado do arquivo **[App.jsx](https://github.com/MQ-J/ReactMobile/blob/main/src/App.jsx)** a seguir:

```javascript
let basename = process.env.NODE_ENV == "development" ? "" : "/ReactMobile/dist"
<Router basename={basename}>
```

## **Controle de Login**

FETCH tem costume de usar cache, mas como este projeto usa fetch para pesquisar os usuários válidos, foi preciso desativar o uso do cache. Visão simplificada deste trecho do arquivo Login.jsx:

```javascript
fetch("url",
      {
        headers: {
          Accept: "application/json"
        },
        cache: "no-store"
      })
```

## **Login e Logout**

Este projeto usa LocalStorage para pular o formário de login quando já houver um usuário logado no navegador:

```javascript
  localStorage.getItem("user") ? 
    useEffect(() => {
      navigate(localStorage.getItem("user"))
    },[])
  : console.log("faça o login")
```

Também remove o localStorage e muda a rota com base no ambiente, para fazer logout:
```javascript
const url = process.env.NODE_ENV == "development" ? "/" : "/ReactMobile/dist"
    const removeLogin = () => {
        localStorage.removeItem("user")
        location = url
    }
```

## **Limitations in Android Development**

Due to security restrictions in Android, execute permissions on write-allowed storage is likely forbidden on most stock devices. This prevents some npm scripts from working properly as `npm run` rely on the use of `sh` which requires exec permissions.

The `node` program is also built as a shared library for compatibility with future versions of Android and can only be accessed from the terminal and not `sh`.

For these reasons, using `npm run ...` will not work from the terminal, but entering the command (`webpack`) directly in the terminal will work.
