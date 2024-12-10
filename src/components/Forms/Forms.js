import styles from "./Forms.module.scss";
import { useSelector } from "react-redux";
import RectForm from "../RectForm/RectForm";
import NewRectForm from "../NewRectForm/NewRectForm";
import SelectForm from "../SelectForm/SelectForm";
import RoundForm from "../RoundForm/RoundForm";
import NewRoundForm from "../NewRoundForm/NewRoundForm";

const Forms = () => {
    const selectedShape = useSelector(state => state.selectedShape);
    const selectedNewShape = useSelector(state => state.selectedNewShape);

    return (
        <div className={styles.forms__container}>
            <div className={styles.form__container}>
            <h3>Forma z przepisu: </h3>
                <SelectForm isNew={false} />
                {selectedShape === 'rect' && <RectForm />}
                {selectedShape === 'round' && <RoundForm />}
            </div>
            <div className={styles.form__container}>
                <h3>Twoja forma: </h3>
                <SelectForm isNew={true} />
                {selectedNewShape === 'rect' && <NewRectForm />}
                {selectedNewShape === 'round' && <NewRoundForm />}
            </div>
        </div>
    );
};

export default Forms;