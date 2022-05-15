import React from "react";
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput.js";
import PlayerPreview from "./PlayerPreview.js";

class Battle extends React.Component {
    constructor() {
        super();
        this.state = {
            playerOneName: '',
            playerOneImg: null,
            playerTwoName: '',
            playerTwoImg: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, username) {
        this.setState({
            [id + 'Name']: username,
            [id + 'Img']: `https://github.com/${username}.png?size200`
        });
    }

    handleReset(id) {
        this.setState({
            [id + 'Name']: '',
            [id + 'Img']: null
        });
    }

    render() {
        const { playerOneName, playerTwoName, playerOneImg, playerTwoImg } = this.state;

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

export default Battle;