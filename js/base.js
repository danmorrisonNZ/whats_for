var Question = React.createClass({
  render: function() {
    return (
      <h3>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </h3>
    );
  }
});

ReactDOM.render(
  // variable created above
  <Question date={new Date()} />,

  // element to place it into
  document.getElementById('container')
);
