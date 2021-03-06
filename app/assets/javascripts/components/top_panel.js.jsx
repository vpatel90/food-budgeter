var TopPanel = React.createClass({

  getInitialState: function () {
    return {
      totalSpent: this.props.groceries + this.props.restaurants,
      meals: this.props.currentDisplay == 'groceries' ? this.props.ate_in : this.props.ate_out,
      totalMeals: this.props.totalMeals,
      currentDisplay: this.props.currentDisplay,
      value: '',
      next_week: false
    }
  },

  updateValue: function (e) {
    this.setState({
      value: e.target.value
    });
  },

  updateWeek: function () {
    this.setState({
      next_week: !this.state.next_week
    });
  },

  submitForm: function () {
    this.props.updateExpense( this.state.value, this.state.next_week, this.props.currentDisplay );
    if (this.state.value && this.state.next_week) {
      Materialize.toast('$' + this.state.value + ' Added to Next Week', 2000);
    };
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      totalSpent: nextProps.groceries + nextProps.restaurants,
      meals: nextProps.currentDisplay == 'groceries' ? nextProps.ate_in : nextProps.ate_out,
      totalMeals: nextProps.totalMeals,
      currentDisplay: nextProps.currentDisplay,
      value: '',
      next_week: this.state.value === '' ? this.state.next_week : false
    });
  },

  render: function() {
    return (
      <div className='top-panel'>
        <div className='row input-field'>
          <div className={'col ' + this.state.currentDisplay + '-text'}>
            Total {this.state.currentDisplay}: $ {(this.state.currentDisplay == 'groceries' ? this.props.groceries : this.props.restaurants).toFixed(2)}
          </div>
          <div className={'col right '+ this.state.currentDisplay + '-text text-darken-2'}>
            {this.state.currentDisplay == 'groceries' ? 'Ate In' : 'Ate Out'}: {this.state.meals}
          </div>
        </div>
        <div className='row input-field'>
          <div className='col deep-orange-text'>
            Total Spent: $ {this.state.totalSpent.toFixed(2)}
          </div>
          <div className={'col right '+ this.state.currentDisplay + '-text text-darken-2'}>
            Meals: {this.state.totalMeals}
          </div>
        </div>
        <div>
          <div className='input-field form-input'>
            <input onChange={this.updateValue} type='number' step='any' name='expense' value={this.state.value} placeholder={"Add " + this.state.currentDisplay + " spending"} />
          </div>
          <div className='submit-btn btn deep-orange' onClick={this.submitForm} >
            Add
          </div>
        </div>
        <div>
          <div className={'next-week-check ' + this.state.currentDisplay + "-check"}>
            <input type="checkbox" id="next-week" className="next-week" checked={this.state.next_week} onChange={this.updateWeek} />
            <label className="check-week" htmlFor="next-week">Next Week?</label>
          </div>
        </div>
      </div>
    );
  }
});
