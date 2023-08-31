import { forwardRef, useState } from "react";
import styles from "./styles.module.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const InputSenha = forwardRef(
    ({ label, error, id, ...rest }, ref) => {
        const [isHidden, setIsHidden] = useState(true);

        return (
            <div className={styles.Div}>
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
                <input
                    id={id}
                    type={isHidden ? "password" : "text"}
                    ref={ref}
                    {...rest}
                />
                <button
                    title="Botão ver senha"
                    type="button"
                    onClick={() => setIsHidden(!isHidden)}
                >
                    {isHidden ? (
                        <AiFillEye size={18} />
                    ) : (
                        <AiFillEyeInvisible size={18} />
                    )}
                </button>
                {error ? <p className={styles.p}>{error.message}</p> : null}
            </div>
        );
    }
);