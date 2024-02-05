import { useCallback, useEffect, useState } from "react";
import './styles.css';

function Panel({ panelstate, onPanelClick }) {
    return (
        <button className="square" 
            style={panelstate ? {backgroundColor: '#fff'} : {backgroundColor: '#000'}}
            onClick={onPanelClick}
            ></button>
    )
}

function generateGrid(gsize, numberOfReverse) {
    const gridSize = gsize;
    const answerGrid = Array.from({length: gridSize ** 2}, () => Math.random() < 0.5);
    let initialGrid = answerGrid.slice();
    const answerInds = Array.from({length: numberOfReverse}, () => Math.floor(Math.random() * gridSize ** 2));
    for (const ind of answerInds) {
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
    return { answerGrid, initialGrid, answerInds };
}

export default function Game() {
    const [ansGrid, setAnsGrid] = useState({Grid: [], Inds: []});
    const [diff, setDiff] = useState([3, 1]);
    const [isFront, setIsFront] = useState([Array(diff[0]**2).fill(true)]);
    const [showAns, setShowAns] = useState(false);
    const [life, setLife] = useState(3);
    const currIsFront = isFront[isFront.length - 1];

    /* 非同期の処理に対する対処、かなり冗長な気がする */
    const gridsf = useCallback(
        () => generateGrid(diff[0], diff[1]),
        [diff]
    );

    useEffect(() => {
        const fetchData = async () => {
            const grids = await gridsf();
            setIsFront([grids.initialGrid]);
            setAnsGrid({Grid: grids.answerGrid, Inds: grids.answerInds});
        };
    
        fetchData();
    }, [diff, gridsf]);

    function handleSetDiff(i) {
        let newdiff = [i, 1];
        setDiff(newdiff);
        setShowAns(false);
        setLife(3);
    }

    function handleNextPhase() {
        let newdiff = diff.slice();
        newdiff[1]++;
        setDiff(newdiff);
        setShowAns(false);
    }

    /* 規定回数で正解しなかったら初期状態に */
    function handleSetGrid(nextIsFront) {
        if (isFront.length - 1 === diff[1]) {
            setIsFront([isFront[0]])
            life > 0 ? setLife((l) => (l-1)) : handleSetDiff(diff[0]);
        } else {
            setIsFront([...isFront, nextIsFront]);
        }
    }

    function handleAnsVisible() {
        setShowAns((s) => !s);
    }

    /* 多分いらない */
    if (!ansGrid.Inds) {
        return <button onClick={() => gridsf()}>Pless to Start</button>
    }

    /* クリアか否か判定 */
    let statusmes, win = true;
    for (let i = 0; i < diff[0] ** 2; i++) {
        win &= !(ansGrid.Grid[i] ^ currIsFront[i]);
    }
    if (win) {
        statusmes = 'Good! Click grid to start next phase.';
    } else {
        statusmes = diff[1] - isFront.length + 1 + ' times left.';
        if (diff[1] - isFront.length + 1 === 0) {
            if (life) {
                statusmes += ' Click grid to restart.'
            } else {
                statusmes += ' Game Over >_<'
            }
            
        }
    }

    return (
        <>
            <p>{'Level ' + diff[1]}</p>
            <p>{'your life × ' + life}</p>
            <Grid ansGrid={ansGrid.Grid} isFront={currIsFront} onSetGrid={handleSetGrid} onNext={handleNextPhase} gsize={diff[0]} win={win}/>
            <p>{statusmes}</p>
            <button onClick={() => handleAnsVisible()}>showAnswer</button>
            {showAns && 
                <div className="answer">
                    {
                        ansGrid.Inds.map((ind, i) =>
                            <div key={i}>
                                {ind}
                            </div>
                        )
                    }
                </div>
            }
            <p>set difficulty</p>
            <button onClick={() => handleSetDiff(3)}>easy</button>
            <button onClick={() => handleSetDiff(4)}>medium</button>
            <button onClick={() => handleSetDiff(5)}>hard</button>
        </>
    )
}

function Grid({ ansGrid, isFront, onSetGrid, onNext, gsize, win }) {
    const gridSize = gsize;

    function handleClick(i){
        if (win) {
            onNext();
            return;
        }
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
        onSetGrid(newIsFront);
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