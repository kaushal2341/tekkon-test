import React, { useState, useEffect } from 'react';
import { APICaller, UrlConstants } from '@tekkon/api-services';
import { Link } from 'react-router-dom';
import Loading from '../../component/Loading';

const Characters:React.FC = () => {
  const [listOfCharacter, setListOfCharacter] = useState({
    isLoading: true,
    errorMessage: '',
    characterLists: [],
  });

  const setTheState = (isLoading:any, errorMessage:any, characterLists:any) => {
    setListOfCharacter({ isLoading, errorMessage, characterLists });
  };
  useEffect(() => {
    fetchCharacters();
  }, []);
  const fetchCharacters = async () => {
    try {
      const characterList = await APICaller.get(
        UrlConstants.HarryPotterInterface.list
      );
      setTheState(false, '', characterList.data.characters);
    } catch (e) {
      setTheState(
        false,
        e.error || e.message || 'Internal Server error',
        []
      );
    }
  };



  const { characterLists, errorMessage } =listOfCharacter;
  return (characterLists.length ? (
    <div className="row">
      {characterLists.map((character) => {
        <div className="col-md-3">
          <img src={character?.image || ''} alt={character.name}></img>
          <Link to={'/list' + character.id}>{character.name}</Link>
        </div>;
      })}
    </div>
  ) : errorMessage ? (
    <p>{errorMessage}</p>
  ) : (
    <Loading />
  ));
};
export default Characters;
