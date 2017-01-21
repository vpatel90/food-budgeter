var MidPanel = React.createClass({

  getInitialState: function () {
    return {
      currentDisplay: this.props.currentDisplay,
      currentSub: this.props.currentSub
    }
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      currentDisplay: nextProps.currentDisplay,
      currentSub: nextProps.currentSub
    });
  },

  componentDidMount: function () {
    var that = this;
    mc = new Hammer(document.getElementById('middle-panel'));

    mc.on("panleft panright", function(e) {
    if ((e.type === 'panleft' && that.state.currentDisplay === 'groceries')
       || (e.type === 'panright' && that.state.currentDisplay === 'restaurants'))
      that.swapClasses();
    });
  },

  swapClasses: function () {
    $('nav').addClass(this.props.currentSub);
    $('nav').removeClass(this.props.currentDisplay);
    this.props.updateCurrentDisplay();
  },

  addMeal: function () {
    this.props.updateMeal(this.state.currentDisplay)
  },

  renderPanel: function ( func, display ) {
    return (
        <div onClick={func} id={display} className={(display == this.state.currentDisplay ? 'main-btn ' : 'sub-btn ') + display + '-btn btn-large waves-effect waves-light'}>
          <i className={'fa fa-' + (display == 'groceries' ? 'shopping-basket' : 'cutlery')}></i>
        </div>
    );
  },

  render: function() {
    return (
      <div className='row center middle-panel' id='middle-panel'>
        {this.renderPanel( this.addMeal, this.state.currentDisplay )}
        {this.renderPanel( this.swapClasses, this.state.currentSub )}
      </div>
    );
  }
});
