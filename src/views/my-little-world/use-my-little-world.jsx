import { useState, useEffect } from 'react'
import { generateRandomString } from '../../helpers/common'

const useMyLittleWorld = () => {
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(100);
    const [islands, setIslands] = useState(0);
    const [filled, setFilled] = useState([]);
    const [myLittleWorld, setMyLittleWorld] = useState([]);

    useEffect(() => {
        const newWorld = [...Array(height).keys()].map((heightItem, heightIndex) => {
            return {
                rowKey: generateRandomString(12),
                column: [...Array(width).keys()].map((widthItem, widthIndex) => ({
                    columnKey: generateRandomString(12),
                    selected: false,
                    xPosition: heightIndex,
                    yPosition: widthIndex,
                }))
            };
        })
        setMyLittleWorld(newWorld)
    }, [height, setMyLittleWorld, width]);

    useEffect(() => {
        const processIslands = () => {
            let visitedItems = []; 
            const filledKeys = filled.map(item => item.columnKey);
            let islandCount = 0; 

            const isIsland = (item) => {
                if(!item ||visitedItems.includes(item.columnKey)) return;
                visitedItems.push(item.columnKey);
                const left = myLittleWorld?.[item.xPosition]?.column[item.yPosition - 1];
                const right = myLittleWorld?.[item.xPosition]?.column[item.yPosition + 1];
                const up = myLittleWorld?.[item.xPosition - 1]?.column[item.yPosition];
                const down = myLittleWorld?.[item.xPosition + 1]?.column[item.yPosition];

                if(left && filledKeys.includes(left.columnKey)) isIsland(left);
                if(right && filledKeys.includes(right.columnKey)) isIsland(right);
                if(up && filledKeys.includes(up.columnKey)) isIsland(up);
                if(down && filledKeys.includes(down.columnKey)) isIsland(down);
            };
            
            filled.forEach((item) => {
                if (!visitedItems.includes(item.columnKey)){
                    isIsland(item)
                    islandCount++;
                }
            });
            setIslands(islandCount);
        };
        processIslands();
    }, [filled, myLittleWorld]);

    const handleFilled = (payload) => {
        setFilled(prevState => {
            if (prevState.map(item => item.columnKey).includes(payload.columnKey))
                return prevState.filter((item) => item.columnKey !== payload.columnKey)
            return prevState.concat(payload).sort(function (a, b) {
                if (a.xPosition === b.xPosition) return a.yPosition - b.yPosition;
                return a.xPosition - b.xPosition;
            });;
        });
    };

    return {
        width,
        setWidth,
        height,
        setHeight,
        myLittleWorld,
        filled,
        handleFilled,
        islands
    };
}

export default useMyLittleWorld;