var BottomPanel = React.createClass({

  getInitialState: function () {
    return {
      average: this.props.average.toFixed(2),
      totalSpent: this.props.groceries + this.props.restaurants,
      meals: this.props.meals,
      compareTo: 10.00,
      hypothetical: 10.00 * this.props.meals,
      currentDisplay: this.props.currentDisplay
    }
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      average: nextProps.average.toFixed(2),
      totalSpent: nextProps.groceries + nextProps.restaurants,
      meals: nextProps.meals,
      hypothetical: 10.00 * nextProps.meals,
      currentDisplay: nextProps.currentDisplay
    });
  },

  difference: function() {
    return Math.abs(this.state.hypothetical - this.state.totalSpent).toFixed(2);
  },

  savingMessage: function () {
    savingMoney = this.state.totalSpent <= this.state.hypothetical


    return (
      <div className={savingMoney ? (this.state.currentDisplay + '-text') : 'deep-orange-text'}>
        {savingMoney ? 'You saved' : 'You overspent'} $ {this.difference()}
      </div>
    );
  },

  render: function() {
    return (
      <div className='row bottom-panel'>
        <div className={'center title ' + this.state.currentDisplay + '-text text-lighten-2 col.s12'}>
          Average per meal this week
        </div>
        <div className={'center value ' + this.state.currentDisplay + '-text col s12'}>
          $ {this.state.average}
        </div>

        <div className={'center col s12 ' + this.state.currentDisplay + '-text text-lighten-2'}>
          At an average of $ 10 per meal, 
          <div> you would have spent $ {this.state.hypothetical}</div>
        </div>

        <div className='center col s12 title'>
          {this.savingMessage()}
        </div>
      </div>
    );
  }
});
