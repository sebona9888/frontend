import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="w-full sm:w-auto px-5 py-3 bg-[#002B5B] text-white rounded-lg hover:bg-[#001a3a] transition text-sm sm:text-base"
        >
            {children}
        </button>
    );
};

export default Button;