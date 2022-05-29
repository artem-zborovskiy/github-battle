import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput.js";
import PlayerPreview from "./PlayerPreview.js";
import { setPlayer, doReset } from "../../redux/actions/battle.actions.js";

const mapStateToProps = ({battleReducer}) => ({
    playerOneName: battleReducer.playerOneName,
    playerOneImg: battleReducer.playerOneImg,
    playerTwoName: battleReducer.playerTwoName,
    playerTwoImg: battleReducer.playerTwoImg
});

class Battle extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, username) {
        this.props.dispatch(setPlayer(id, username));
    }

    handleReset(id) {
        this.props.dispatch(doReset(id));
    }

    render() {
        const { playerOneName, playerTwoName, playerOneImg, playerTwoImg } = this.props;

        return(
            <div>
                <div className="row">
                    {!playerOneName ? 
                        <PlayerInput 
                            id="playerOne"
                            label="Player One"
                            onSubmit={this.handleSubmit}
                        /> :
                        <PlayerPreview
                            username={playerOneName}
                            avatar={playerOneImg}
                        >
                            <button className="reset" onClick={this.handleReset.bind(this, 'playerOne')}>Reset</button>
                        </PlayerPreview>
                    }
                    {!playerTwoName ?
                        <PlayerInput 
                            id="playerTwo"
                            label="Player Two"
                            onSubmit={this.handleSubmit}
                        /> :
                        <PlayerPreview 
                            username={playerTwoName}
                            avatar={playerTwoImg}
                        >
                            <button className="reset" onClick={this.handleReset.bind(this, 'playerTwo')}>Reset</button>
                        </PlayerPreview>
                    }
                </div>

                {playerOneImg && playerTwoImg && 
                    <Link className="button" to={{
                        pathname: '/battle/results',
                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                    }}>
                        Battle
                    </Link>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(Battle);