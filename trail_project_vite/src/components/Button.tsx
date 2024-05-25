
interface Props {
    children: string;
    onClick: () => void;
    color ?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';

}

const Button = ({ children, onClick,color='dark' }: Props) => {
    return (
        <button className={'btn btn-'+color} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
