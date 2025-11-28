import React from "react";
import styles from "./gradientText.module.scss";

export interface GradientTextProps {
  /** Texto a ser exibido. Se ambos `text` e `children` forem passados, `children` tem preferência. */
  text?: string;
  /** Conteúdo filho opcional (texto ou elementos). */
  children?: React.ReactNode;
  /** Tag HTML a ser usada (ex: 'h1', 'h2', 'span'). Padrão: 'span' */
  as?: keyof JSX.IntrinsicElements;
  /** Classe adicional opcional */
  className?: string;
  /** Tamanho da fonte (ex: '32px' ou 32). Se não informado, define um padrão com base na tag `as`. */
  size?: string | number;
  /** Estilos inline adicionais aplicados ao elemento (útil para ajustar margin/padding quando necessário). */
  style?: React.CSSProperties;
  /** Variante visual do componente. 'default' usa o gradiente atual; 'grey-gradient' usa o gradiente cinza definido. */
  variant?: "default" | "grey-gradient";
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  as = "span",
  className = "",
  children,
  size,
  style,
  variant = "default",
}) => {
  const Tag = as as any;

  // Apenas aplica `font-size` inline se o prop `size` for fornecido.
  const fontSize = size
    ? typeof size === "number"
      ? `${size}px`
      : size
    : undefined;

  const mergedStyle: React.CSSProperties = {
    ...(fontSize ? { fontSize } : {}),
    ...style,
  };

  // Aplica automaticamente a classe utilitária `.h1` do módulo de estilos
  // quando a prop `as` for 'h1'. Isso evita que consumidores tenham que
  // importar o módulo de `gradientText.module.scss` apenas para usar a
  // variação de título.
  const extraClass = as === "h1" && styles.h1 ? styles.h1 : "";
  const variantClass =
    variant === "grey-gradient" && styles.greyGradient
      ? styles.greyGradient
      : "";

  return (
    <Tag
      className={`${styles.gradientText} ${extraClass} ${variantClass} ${className}`.trim()}
      style={mergedStyle}
    >
      {children ?? text}
    </Tag>
  );
};

export default GradientText;
