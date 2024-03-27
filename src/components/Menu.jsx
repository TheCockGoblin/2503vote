import style from './Menu.module.css'

function Menu()
{
    return(
        <div className={style.wrapMenu}>
            <p>
                <a href={'/'}>Cards</a>
            </p>
            <p>
                <a href={'/contact'}>Contato</a>
            </p>
        </div>
    )
}
export default Menu;