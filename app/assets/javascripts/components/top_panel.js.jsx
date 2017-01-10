var TopPanel = React.createClass({

  getInitialState: function () {
    return {
      totalSpent: this.props.expenditure.groceries + this.props.expenditure.restaurants
    }
  },


  render: function() {
    return (
      <div className='top-panel'>
        <div className='row input-field'>
          <div className='col red-text'>
            Total Spent: $ {this.state.totalSpent.toFixed(2)}
          </div>
          <div className='col right green-text text-darken-2'>
            Meals: {this.props.meals}
          </div>
        </div>
        <div>
          <div className='input-field'>
            <input type='number' step='any' name='expenditure' />
            <label htmlFor='expenditure'>{'Add ' + this.props.currentDisplay + ' spending'} </label>
          </div>
        </div>
      </div>
    );
  }
});