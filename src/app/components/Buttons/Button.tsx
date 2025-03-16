import React from "react";

interface ButtonProps {
    buttonText: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, link }) => {
    return (
        <div>
            <a href={link}>
                <button className="cursor-pointer bg-blue-500 text-white font-bold py-5 px-5 rounded flex items-center">
                    {buttonText}
                    <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </a>
        </div>
    );
};

export default Button;
