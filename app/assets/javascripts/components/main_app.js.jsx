var MainApp = React.createClass({
  getInitialState: function () {
    return {
      meals: this.props.week.total_meals,
      groceries: this.props.expenditure.groceries,
      restaurants: this.props.expenditure.restaurants,
      currentDisplay: 'groceries',
      currentSub: 'restaurants',
      average: this.props.week.average
    }
  },

  updateExpenditure: function (amount, type) {
    $.ajax({
      url: '/expenditures/' + this.props.expenditure.id,
      data: {
        expenditure: {
          amount: amount,
          type: type
        }
      },
      type: 'PUT',
      success: function (data) {
        this.setState({
          meals: data.week.total_meals,
          groceries: data.expenditure.groceries,
          restaurants: data.expenditure.restaurants,
          average: data.week.average
        });
      }.bind(this)
    });
  },

  updateMeal: function (manner) {
      $.ajax({
      url: '/weeks/' + this.props.week.id,
      data: {
        manner: manner
      },
      type: 'PUT',
      success: function(data) {
        this.setState({
          meals: data.week.total_meals,
          average: data.week.average
        });
      }.bind(this)
    });  
  },

  updateCurrentDisplay: function () {
    this.setState({
      currentDisplay: this.state.currentSub,
      currentSub: this.state.currentDisplay
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
          updateCurrentDisplay={this.updateCurrentDisplay} 
          currentDisplay={this.state.currentDisplay}
          currentSub={this.state.currentSub}
        />
        <BottomPanel
          groceries={this.state.groceries}
          restaurants={this.state.restaurants}
          meals={this.state.meals}    
          average={this.state.average}
          currentDisplay={this.state.currentDisplay}
        />
      </div>
    );
  }
});
