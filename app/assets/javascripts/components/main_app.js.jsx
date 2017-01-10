var MainApp = React.createClass({
  getInitialState: function () {
    return {
      week: this.props.week,
      expenditure: this.props.expenditure,
      currentDisplay: 'groceries'
    }
  },

  updateExpenditure: function ( amount, type ) {

  },

  updateCurrentDisplay: function ( newDisplay ) {
    this.setState({
      currentDisplay: newDisplay
    });
  },

  render: function() {
    return (
      <div>
        <TopPanel 
          updateExpenditure={this.updateExpenditure} 
          updateCurrentDisplay={this.updateCurrentDisplay} 
          currentDisplay={this.state.currentDisplay} 
          expenditure={this.state.expenditure}
          meals={this.state.week.meals}
        />
      </div>
    );
  }
});