var TopPanel = React.createClass({

  getInitialState: function () {
    return {
      totalSpent: this.props.groceries + this.props.restaurants,
      meals: this.props.meals,
      currentDisplay: this.props.currentDisplay,
      value: ''
    }
  },

  updateValue: function (e) {
    this.setState({
      value: e.target.value
    });
  },

  submitForm: function () {
    this.props.updateExpenditure( this.state.value, this.props.currentDisplay );
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      totalSpent: nextProps.groceries + nextProps.restaurants,
      meals: nextProps.meals,
      currentDisplay: nextProps.currentDisplay,
      value: ''
    });
  },

  render: function() {
    return (
      <div className='top-panel'>
        <div className='row input-field'>
          <div className='col red-text'>
            Total Spent: $ {this.state.totalSpent.toFixed(2)}
          </div>
          <div className='col right green-text text-darken-2'>
            Meals: {this.state.meals}
          </div>
        </div>
        <div>
          <div className='input-field form-input'>
            <input onChange={this.updateValue} type='number' step='any' name='expenditure' value={this.state.value} />
            <label htmlFor='expenditure'>{'Add ' + this.state.currentDisplay + ' spending'} </label>
          </div>
          <div className='submit-btn btn red' onClick={this.submitForm}>
            Add
          </div>
        </div>
      </div>
    );
  }
});