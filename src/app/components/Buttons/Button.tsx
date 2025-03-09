import React from "react";

interface ButtonProps {
    buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText }) => {
    return (
        <div>
            <a href="#">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center">
                    {buttonText}
                    <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </a>
        </div>
    );
};

export default Button;
