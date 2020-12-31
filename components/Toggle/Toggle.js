import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Toggle.module.css";

const Toggle = ({ name, inputRef, ...other }) => {
    return (
        <div className="flex items-center justify-center mx-4">
            <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        id="toogleA"
                        type="checkbox"
                        className="hidden"
                        ref={inputRef}
                        name={name}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...other}
                    />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
                    <div className={clsx(styles.dot, "absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0")} />
                </div>
            </label>
        </div>
    );
};
Toggle.propTypes = {
    name: PropTypes.string,
    inputRef: PropTypes.any,
};
Toggle.defaultProps = {
    name: undefined,
    inputRef: undefined,
};
export default Toggle;
