var Graph = React.createClass({

  getInitialState: function () {
    return {
      weeks: this.props.weeks,
      labels: [],
      series: [],
      yLabel: 'Total Expense'
    }
  },

  componentDidMount: function () {
    var labels = [];
    var series = [];

    this.state.weeks.map(function(week){
      labels.push(week.pretty_time);
      series.push(week.total_expenditure);
    });

    this.setState({
      labels: labels,
      series: series
    });

  },

  generateGraph: function () {
    var data = {
      labels: this.state.labels,
      series: [
        this.state.series
      ],
    };

    new Chartist.Line('.ct-chart', data, { low: 0 });

  },

  render: function() {
    return (
      <div>
        <h5 className="center"> Total Expenses Over Weeks </h5>
        <div className="y-label">{this.state.yLabel}</div>
        <div className="ct-chart ct-major-third"></div>
        {this.generateGraph()}
      </div>
    );
  }
});
