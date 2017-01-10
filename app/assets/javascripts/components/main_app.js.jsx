var MainApp = React.createClass({
  getInitialState: function () {
    return {
      meals: this.props.week.meals,
      groceries: this.props.expenditure.groceries,
      restaurants: this.props.expenditure.restaurants,
      currentDisplay: 'groceries'
    }
  },

  updateExpenditure: function ( amount, type ) {
    $.ajax({
      url: '/expenditures/' + this.props.expenditure.id,
      data: {
        expenditure: {
          amount: amount,
          type: type
        }
      },
      type: 'PUT',
      success: function(data) {
        this.setState({
          meals: data.week.meals,
          groceries: data.expenditure.groceries,
          restaurants: data.expenditure.restaurants
        });
      }.bind(this)
    });
  },

  updateMeal: function () {
      $.ajax({
      url: '/weeks/' + this.props.week.id,
      data: {},
      type: 'PUT',
      success: function(data) {
        this.setState({
          meals: data.week.meals
        });
      }.bind(this)
    });  
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
          groceries={this.state.groceries}
          restaurants={this.state.restaurants}
          meals={this.state.meals}
        />
        <MidPanel
          updateMeal={this.updateMeal}
        />
      </div>
    );
  }
});