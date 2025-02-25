import { NavLink } from 'react-router-dom';

const Button = ({ title, link, theme, icon, newPage }) => {
    return (
        <NavLink to={link} target={`${newPage ? "_self" : "_blank"}`}>
            <button
                className={`px-4 py-2 border-2 ${theme ?
                        "border-black bg-[#806657] text-black hover:bg-black hover:text-white focus:ring-[#806657]"
                        :
                        "border-black bg-[#806657] text-[#f4f4f4] hover:bg-black hover:text-white focus:ring-[#806657]"} 
                     font-semibold text-md md:text-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 active:scale-95 flex items-center justify-center gap-2 navLinksStyle`}>
                {title} {icon}
            </button>
        </NavLink>
    );
};

export default Button;
