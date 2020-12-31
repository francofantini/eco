import useDarkMode from "use-dark-mode";
import Toggle from "./Toggle/Toggle";

const DarkMode = () => {
    const darkMode = useDarkMode(false, { classNameDark: "dark", element: typeof window !== "undefined" && window.document.documentElement });

    return (
        <div className="absolute right-2 top-5">
            <div className="flex flex-row items-center justify-start">
                <button type="button" onClick={darkMode.disable}>
                    ☀
                </button>
                <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
                <button type="button" onClick={darkMode.enable}>
                    ☾
                </button>
            </div>
        </div>
    );
};
DarkMode.propTypes = {};
DarkMode.defaultProps = {};

export default DarkMode;
