import { Link } from 'react-router-dom';
import styles from './MenuHeader.module.css'

function MenuHeader(){
    return (
        <>
            <header className={styles.header}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Cadastrar</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/listar">Listar</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default MenuHeader;
