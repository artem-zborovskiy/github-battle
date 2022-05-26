import React, { useEffect, useState, Fragment } from "react";
import { Player } from "./Player.js";
import { battle } from "../../utils/api.js";

const Results = (props) => {
    const [loading, setLoading] = useState(true);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        const playerOneName = searchParams.get('playerOneName');
        const playerTwoName = searchParams.get('playerTwoName');

        battle([playerOneName, playerTwoName])
            .then(([winner, loser]) => {
                if(winner && loser) {
                    setWinner(winner);
                    setLoser(loser);
                } else {
                    setError('Looks like there is an error. Check both users!');
                }
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if(error) {
        return <h3>{error.message}</h3>;
    }

    if(loading) {
        return <span className="loader"></span>;
    }

    return(
        <div className="row">
            {winner && loser &&
                <Fragment>
                    <Player
                        label="Winner"
                        score={winner.score}
                        profile={winner.profile}
                    />
                    <Player
                        label="Loser"
                        score={loser.score}
                        profile={loser.profile}
                    />
                </Fragment>
            }     
        </div>
    )
}

export default Results;