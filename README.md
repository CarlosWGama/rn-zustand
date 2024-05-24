# React Native aula Zustand

## Branchs

- inicio
Material do inicio aula sem ainda com o Zustand
```
git clone https://github.com/CarlosWGama/rn-zustand zustand
cd zustand
git checkout inicio
npm install
```

- main
Material da aula concluída já com o zustand
```
git clone https://github.com/CarlosWGama/rn-zustand zustand
cd zustand
git checkout main
npm install
```

## Exemplo do Zustand

- Instalar:
```
npx expo install zustand
```

- Usar

```javascript
import { create } from 'zustand'

const useUsuarioLogado = create((set) => ({
  usuarioLogado: null,
  setUsuarioLogado: (usuario) => set(() => ({ usuarioLogado: usuario })),
}))

function Counter() {
  const { usuarioLogado, setUsuarioLogado } = useStore()
  return (
    <div>
      <span>{usuarioLogado}</span>
      <button onClick={() => setUsuarioLogado('Carlos')}>Conecta</button>
    </div>
  )
}
```