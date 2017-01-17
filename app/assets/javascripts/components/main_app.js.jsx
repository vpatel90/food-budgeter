var MainApp = React.createClass({
  getInitialState: function () {
    return {
      totalMeals: this.props.week.total_meals,
      groceries: this.props.expenditure.groceries,
      ate_in: this.props.week.ate_in_meals,
      restaurants: this.props.expenditure.restaurants,
      ate_out: this.props.week.ate_out_meals,
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
          totalMeals: data.week.total_meals,
          ate_in: data.week.ate_in_meals,
          ate_out: data.week.ate_out_meals,
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
          totalMeals: data.week.total_meals,
          ate_in: data.week.ate_in_meals,
          ate_out: data.week.ate_out_meals,
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
          totalMeals={this.state.totalMeals}
          ate_in={this.state.ate_in}
          ate_out={this.state.ate_out}
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
          totalMeals={this.state.totalMeals}    
          average={this.state.average}
          currentDisplay={this.state.currentDisplay}
        />
      </div>
    );
  }
});
