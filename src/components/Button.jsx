import '../sass/Button.scss';
export const Button = (props) => {
  return (
    <div className="btn___box">
      <button className="btn">{props.text}</button>
      <div className="btn___shadow"></div>
    </div>
  );
};
