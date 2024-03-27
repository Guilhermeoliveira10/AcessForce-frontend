
import './style.css'


interface ButtonProps {
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    text?: string; // Propriedade opcional para o texto do botão
    id?: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ onClick, variant = 'primary', text, id }) => {
    return (
      <button id={id} className={`button ${variant}`} onClick={onClick}>
        {text}
      </button>
    );
  };

export default Button