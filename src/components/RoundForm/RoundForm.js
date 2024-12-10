import { updateRoundFormR } from "../../redux/actions";
import { useDispatch } from 'react-redux';
import styles from "../Forms/Forms.module.scss";

const RoundForm = () => {

    const dispatch = useDispatch();

    const handleChangeR = (e) => {
        dispatch(updateRoundFormR(Number(e.target.value)));
    }

    return (
        <div>
            <input className={styles.form__input} type="number" step="0.5"
                min="0" placeholder={'Promień (cm)'} onChange={handleChangeR} />
        </div>
    )
};

export default RoundForm;