const React = require('react');


export default class SideOptions extends React.Component {
   constructor(props) {
      super(props);
      this.optView = this.optView.bind(this);
   }
   optView(type) {
      this.props.itmView(type);
   }
   render() {
      const { platformView, optsComponent, tdClass } = this.props;
      return (
         <div id="sideOptions"   className={this.props.onStart ? "hide-elm"  : ""}>
            <div onClick={this.optView.bind(this, 'overview')} className={platformView === "trade history" ? "opts-button opts-active-sec" : "opts-button"}><i className="material-icons">update</i><p>TRADING HISTORY</p></div>
            <div onClick={this.optView.bind(this, 'charts')}  className={platformView === "live graphs" ? "opts-button opts-active-sec" : "opts-button"}> <i className="fa fa-line-chart fix-fa" aria-hidden="true"></i><p>CHARTS</p></div>
            <div onClick={this.optView.bind(this, 'current-bids')} className={(optsComponent === 'current-bids' && tdClass ) ? "opts-button opts-active" : "opts-button"}><i className="material-icons">event_available</i><p>POSITIONS</p></div>
            <div onClick={this.optView.bind(this, 'spreads')} className={(optsComponent === 'spreads' && tdClass ) ? "opts-button opts-active" : "opts-button"}><i className="material-icons">view_list</i><p>OPTIONS</p></div>
            <div onClick={this.optView.bind(this, 'live options')} className={platformView === "live options" ? "opts-button opts-active-sec" : "opts-button"}><i className="material-icons">view_compact</i><p>OPTIONS</p></div>
            <div onClick={this.optView.bind(this, 'past-pos')}  className={platformView === "trade list" ? "opts-button opts-active-sec" : "opts-button"}><i className="material-icons">watch_later</i><p>HISTORY</p></div>
            
         </div>

      )
   }
};