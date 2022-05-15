import React, {useEffect} from "react";

const Results = (props) => {
    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        const playerOneName = searchParams.get('playerOneName');
        const playeTwoName = searchParams.get('playeTwoName');
    }, []);

    return(
        <div>
            123
        </div>
    )
}

export default Results;