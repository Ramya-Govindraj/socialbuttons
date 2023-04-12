const Button = (props) => {
  const { cls, content } = props;
  return <button className={cls}>{content}</button>;
};

const element = (
  <div className="social-btn-bg">
    <h1 className="social-btn-heading">Social Buttons</h1>
    <div className="social-btn-con">
      <Button cls="social-btn-like" content="Like" />
      <Button cls="social-btn-like" content="Comment" />
      <Button cls="social-btn-like" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
