import tempImageTwo from './blank-char.png'; //use react here

// Gonna need a counter list of A to Z incrementing to get chat names

const Header = ({title, num, imgSrc}) => {
  return (
    <section className = "headerContainer">
      <img src = {imgSrc} className ="img"/>
      <div className = "textContainer">
        <h1>{title}</h1> {/*This is the Chat Name*/}
      </div>
      <div className = "userContainer">
        <img src = {tempImageTwo} className= "userLogo"/>
        <h2>{num}</h2> {/* This is for the amount of ppl in chat*/}

      </div>
    </section>
  )
}
export default Header

