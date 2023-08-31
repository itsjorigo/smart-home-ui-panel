import ProfileImg from "./../../assets/Joseph Rodrigo.jpeg"
import s from "./header.module.css"

function Header() {

  const name = 'Joseph'

  return (
    <div className={s.header}>
      <div>
        <h1 className={s.username}>Hi, {name} !</h1>
        <p className={s.header_tagline}>Your devices are under your control</p>
      </div>
      <div>
        <img src={ProfileImg} alt="propic" className={s.profile_img} />
      </div>
    </div>
  );
}

export default Header;
