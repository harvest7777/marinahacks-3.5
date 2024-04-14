const InteractBut = ({ text }) => {


  return (
    <div className="btn-container-out">
      <a href="/join" className="btn-container-in">
        <h1 className="btn-text">{text}</h1>
      </a>
    </div>
  );
};

export default InteractBut;
