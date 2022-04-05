import { useRef, useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './List.scss';
import ListItem from '../listItem/ListItem.js'

function List(){
    const listRef = useRef(); // and assign it down in the jsx code
    const leftArrowComponent = useRef();
    const [slideNumber, setSlideNumber] = useState(0); // to stop the movement of the slider at the first item and the last item
    const [isMoved, setIsMoved] = useState(false); 

    const handleClick = (direction) => {
        // if any button was pressed then the other would appear
        setIsMoved(true);
        // to get how far the item is from the very left border of the page 
        let leftArrowComponentWidth = leftArrowComponent.current.getBoundingClientRect().width;
        let distance = listRef.current.getBoundingClientRect().x - leftArrowComponentWidth;

        if(direction === 'left' && slideNumber > 0){
            // decrease the slide number by one to keep it dynamic
            setSlideNumber(slideNumber-1);
            // here I need to call the container but I'm not allowed to use any vanilla js code here
            // so to do that we need to use useRef which is a react hook
            // after attaching the ref to a component in jsx code 
            // we can call it and modify its values
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === 'right' && slideNumber < 5 ){ // we have 10 items in the array so 5 right slides is the max
            // increase the slide number to keep it dynamic
            setSlideNumber(slideNumber+1);
            // here I need to call the container but I'm not allowed to use any vanilla js code here
            // so to do that we need to use useRef which is a react hook
            // after attaching the ref to a component in jsx code 
            // we can call it and modify its values
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <div className='list'>
            {/* list title */}
            <span className='listTitle'>Movies list</span>
            {/* list's movies wrapper with two arrows*/}
            <div className='wrapper'>
                {/* adding left and right arrows */}
                <ArrowBackIosNewOutlinedIcon className='sliderArrow left' onClick={() => handleClick("left")} ref={leftArrowComponent} 
                    style={{display: !isMoved && 'none'}}
                />
                {/* here the list item */}
                <div className='container' ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosIcon className='sliderArrow right' onClick={() => handleClick("right")}/>
            </div>
            {/* finally a container with all the movies in the list */}
        </div>
    );
}

export default List;