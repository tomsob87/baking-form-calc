import { updateRectFormA, updateRectFormB } from "../../redux/actions";
import { useDispatch } from 'react-redux';
import styles from "../Forms/Forms.module.scss";

const RectForm = () => {

    const dispatch = useDispatch();
    // const { a, b } = useSelector(state => state.rectForm[0]);


    const handleChangeA = (e) => {
        dispatch(updateRectFormA(Number(e.target.value)));
    }

    const handleChangeB = (e) => {
        dispatch(updateRectFormB(Number(e.target.value)));
    }

    return (
        <div>
            <input className={styles.form__input} type="number" step="0.5"
                min="0" placeholder={'Bok A (cm)'} onChange={handleChangeA} />
            <input className={styles.form__input} type="number" step="0.5"
                min="0" placeholder={'Bok B (cm)'} onChange={handleChangeB} />
        </div>
    )
};

export default RectForm;