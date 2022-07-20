import React from 'react';
import './index.css';
import {useRef,useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getVideoList} from '../../../store/video/videoSlice';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const dispatch = useDispatch();
    const inputRef=useRef();
    const navigate=useNavigate()
    const onSearch = (input) => {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${input}&regionCode=kr&type=video&key=AIzaSyB4Rcz2lIQSLJsb8T06CcwDlof5oPEMJEo`
        dispatch(getVideoList(url))
        navigate('/')
    } 
    const onSubmit = (e) => {
        e.preventDefault();
        const input =inputRef.current.value;
        input && onSearch(input);
        inputRef.current.value = '';
    }
    return (
     <form className='search' onSubmit={onSubmit}>
        <input
            placeholder='검색'
            type="text"
            className='searchInput'
            ref={inputRef}
        />
        <button className='searchBtn'>
            <img src="/images/search.png" alt="search icon" className='searchIcon' />
        </button>
    </form>
    );
};

export default SearchForm;