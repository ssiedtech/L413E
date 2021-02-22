import React, {useState} from 'react';
import FlashCard from './FlashCard';
import SampleFlashCards from './FlashCardData';

export default function FlashCardList() {

    const [flashcards, setFlashcards] = useState(SampleFlashCards);

    return (

        
        <div className="card-flex">
            {flashcards.map(flashcards => {
                return <FlashCard flashcard={flashcards} key={flashcards.id} />
            })}
        </div>



    )
}
