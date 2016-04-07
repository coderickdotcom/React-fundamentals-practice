var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');


var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return{
      isLoading: true,
      playersInfo: []
    };
  },
  componentDidMount: function(){
    var query = this.props.location.query;
    //gets users information
    //fetch info from github then update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players){
      this.setState({
        //when everyting is done loading, stop saying "loading"
        isLoading: false,
        playersInfo:[players[0], players[1]]
      })
      // estoy usando "bind" aqui abajo porque el contexto de "this"
      // en la funcion exterior es distinto al de la funcion interior
      // como quiero que sean los mismos, ".bind" me esta creando una
      // copia de la funcion exterior para luego correrla por fuera...
      // hope that makes sense
    }.bind(this))
  },
  render:function(){
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;
