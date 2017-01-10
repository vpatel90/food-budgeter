var MidPanel = React.createClass({

  getInitialState: function () {
    return {
      currentDisplay: this.props.currentDisplay
    }
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      currentDisplay: nextProps.currentDisplay
    });
  },

  render: function() {
    return (
      <div className='row center middle-panel'>
        <div onClick={this.props.updateMeal} className='eat-btn btn-large waves-effect waves-light green'>
          <i className='fa fa-cutlery'></i>
        </div>
      </div>
    );
  }
});
