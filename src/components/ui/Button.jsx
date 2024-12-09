/* eslint-disable react/prop-types */

const Button = ({ bgColor = "bg-blue-500", title = "Apply" }) => {
    return (
      <button className={`px-5 py-1 rounded-sm text-white ${bgColor}`}>
        {title}
      </button>
    );
  };
  
  export default Button;
  