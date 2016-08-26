var Box = React.createClass({
  render: function() {
    return (
      <div class="question-box">
        <h3>
           {this.props.question}
        </h3>
      </div>
    );
  }
});

ReactDOM.render(
  // variable created above
  <Box question={"this one"} />,
  <Box question={"or this one"} />,

  // element to place it into
  document.getElementById('container')
);
