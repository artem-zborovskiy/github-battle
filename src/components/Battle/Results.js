import React, { useEffect, Fragment } from "react";
import { Player } from "./Player.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults } from "../../redux/thunk/results.thunk.js";

const Results = (props) => {
    const dispatch = useDispatch();
    const winner = useSelector(state => state.resultsReducer.winner);
    const loser = useSelector(state => state.resultsReducer.loser);
    const error = useSelector(state => state.resultsReducer.error);
    const loading = useSelector(state => state.resultsReducer.loading);

    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        const playerOneName = searchParams.get('playerOneName');
        const playerTwoName = searchParams.get('playerTwoName');

        dispatch(fetchResults([playerOneName, playerTwoName]));
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