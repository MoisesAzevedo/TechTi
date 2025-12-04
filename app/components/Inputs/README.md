# Input Components

Esta pasta contém componentes de input reutilizáveis para toda a aplicação.

## PhoneInput

Componente de input de telefone com máscara automática brasileira.

### Uso:

```tsx
import { PhoneInput } from '@/components/Inputs';

function MeuFormulario() {
  const [telefone, setTelefone] = useState('');

  return (
    <PhoneInput
      value={telefone}
      onChange={setTelefone}
      placeholder="Telefone*"
      required
      className="minha-classe-css"
    />
  );
}
```

### Props:

- `value` (string): Valor do input
- `onChange` (function): Função chamada quando o valor muda
- `placeholder` (string, opcional): Texto do placeholder (padrão: "Telefone*")
- `required` (boolean, opcional): Se o campo é obrigatório (padrão: false)
- `className` (string, opcional): Classes CSS customizadas

### Funcionalidades:

- ✅ Máscara automática no formato brasileiro: (11) 99999-9999
- ✅ Remove caracteres não numéricos automaticamente
- ✅ Limita a 11 dígitos
- ✅ Formatação em tempo real
- ✅ Compatível com formulários React
