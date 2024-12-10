import { useSelector, useDispatch } from 'react-redux';
import styles from "./SelectForm.module.scss";
import { setSelectedShape, setSelectedNewShape } from '../../redux/actions';

const SelectForm = ({ isNew }) => {
    const dispatch = useDispatch();
    const selectedShape = useSelector(state => isNew ? state.selectedNewShape : state.selectedShape);

    const handleChange = (e) => {
        if (isNew) {
            dispatch(setSelectedNewShape(e.target.value));
        } else {
            dispatch(setSelectedShape(e.target.value));
        }
    };

    const rectId = `rect-${isNew ? 'new' : 'old'}`;
    const roundId = `round-${isNew ? 'new' : 'old'}`;

    return (
        <div className={styles.select__container}>
            <input type="radio" id={rectId} name={`shape-${isNew ? 'new' : 'old'}`} value="rect" checked={selectedShape === 'rect'} onChange={handleChange} />
            <label htmlFor={rectId}>Blacha</label>
            <input type="radio" id={roundId} name={`shape-${isNew ? 'new' : 'old'}`} value="round" checked={selectedShape === 'round'} onChange={handleChange} />
            <label htmlFor={roundId}>Tortownica</label>
        </div>
    );
};

export default SelectForm;