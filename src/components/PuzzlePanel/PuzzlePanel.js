import { useCallback, useEffect, useState } from "react";

function Panel({ panelstate, onPanelClick }) {
    return (
        <button className="square" 
            style={panelstate ? {backgroundColor: '#fff'} : {backgroundColor: '#000'}}
            onClick={onPanelClick}
            ></button>
    )
}

function generateGrid(gsize) {
    const gridSize = gsize;
    const answerGrid = Array.from({length: gridSize ** 2}, () => Math.random() < 0.5);
    let initialGrid = answerGrid.slice();
    const numberOfReverse = 2;
    const selectInds = Array.from({length: numberOfReverse}, () => Math.floor(Math.random() * gridSize ** 2));
    for (const ind of selectInds) {
        const reverseInds = [ind, ind+1, ind-1, ind+gridSize, ind+gridSize+1, ind+gridSize-1, ind-gridSize, ind-gridSize+1, ind-gridSize-1];
        for (let i = 0; i < 9; i++) {
            if (reverseInds[i] >= 0 && reverseInds[i] < gridSize ** 2) {
                if (i%3 === 1 && reverseInds[i] % gridSize === 0) {
                    continue;
                }
                if (i%3 === 2 && (reverseInds[i] + 1) % gridSize === 0) {
                    continue;
                }
                initialGrid[reverseInds[i]] = !initialGrid[reverseInds[i]];
            }
        }
    }
    const answerInds = selectInds.slice().reverse();
    return { answerGrid, initialGrid, answerInds };
}

export default function Game() {
    const [ansGrid, setAnsGrid] = useState({Grid: [], Inds: []});
    const [diff, setDiff] = useState(3);
    const [isFront, setIsFront] = useState([]);

    const gridsf = useCallback(
        () => generateGrid(diff),
        [diff]
    );

    useEffect(() => {
        const fetchData = async () => {
            const grids = await gridsf();
            setIsFront(grids.initialGrid);
            setAnsGrid({Grid: grids.answerGrid, Inds: grids.answerInds});
        };
    
        fetchData();
    }, [diff, gridsf]);

    function handleSetDiff() {
        let newdiff = diff;
        diff === 5 ? newdiff = 3 : newdiff++;
        setDiff(newdiff);
    }

    console.log(ansGrid.Inds);

    if (!ansGrid.Inds) {
        return <button onClick={() => gridsf()}>Pless to Start</button>
    }

    return (
        <>
            <Grid ansGrid={ansGrid.Grid} isFront={isFront} setIsFront={setIsFront} gsize={diff}/>
            <p>{ansGrid.Inds.length + ' times left'}</p>
            <div className="answer">
                {
                    ansGrid.Inds.map((ind, i) =>
                        <div key={i}>
                            {ind}
                        </div>
                    )}</div>
            <button onClick={() => handleSetDiff()}>set difficulty</button>
        </>
    )
}

function Grid({ ansGrid, isFront, setIsFront, gsize }) {
    const gridSize = gsize;

    function handleClick(i){
        let newIsFront = isFront.slice();
        const inds = [i, i+1, i-1, i+gridSize, i+gridSize+1, i+gridSize-1, i-gridSize, i-gridSize+1, i-gridSize-1];
        for (let j = 0; j < 9; j++) {
            if (inds[j] >= 0 && inds[j] < gridSize ** 2) {
                if (j%3 === 1 && inds[j] % gridSize === 0) {
                    continue;
                }
                if (j%3 === 2 && (inds[j] + 1) % gridSize === 0) {
                    continue;
                }
                newIsFront[inds[j]] = !newIsFront[inds[j]];
            }
        }
        setIsFront(newIsFront);
    }

    const slicedGrid = (arr, size) => {
        const res = [];
        for (let i = 0; i < arr.length; i += size) {
            res.push(arr.slice(i, i + size));
        }
        return res;
    };

    return (
        <>
            <div className="board">
                {
                    slicedGrid(ansGrid, gridSize).map((row, i) =>
                        <div key={i} className="board-row">
                            {
                                row.map((isfront, j) =>
                                    <Panel key={j}
                                        panelstate={isfront}
                                    />
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div className="board">
                {
                    slicedGrid(isFront, gridSize).map((row, i) =>
                        <div key={i} className="board-row">
                            {
                                row.map((isfront, j) =>
                                    <Panel key={j}
                                        panelstate={isfront}
                                        onPanelClick={() => handleClick(gridSize*i + j)}
                                    />
                                )
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
}