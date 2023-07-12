import { Link } from "react-router-dom"

type Props = {
    caption:string,
    text:string,
    title:string,
    img:string
}

export const TablesItem = ({caption, title, text, img}: Props) => {
  return (
    <li className="tables__item">
    <img className="tables__item-img" src={img} alt="img" />
    <div className="tables__item-content">
        <span className="tables__item-caption">{caption}</span>
        <h3 className="tables__item-title">{title}</h3>
        <p className="tables__item-text">{text}</p>
        <Link className="tables__item-link" to="/shop">Shop Now</Link>
    </div>
</li>
  )
}
