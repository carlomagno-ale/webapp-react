import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function MovieReviewForm({ movieId }) {

    const api_url = 'http://localhost:3000/api/v1/movies/' + movieId + '/review';

    const [formData, setFormData] = useState({

        name: '',
        vote: 1,
        text: ''

    })

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log('form inviato', formData)

        fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Review submitted');
                window.location.reload();
                setFormData({ name: '', vote: 1, text: '' });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('error submitting your review.');
            });
    }

    return (

        <form action="POST" onSubmit={handleFormSubmit}>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder='Write your name...'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="vote" className="form-label">Rating</label>
                <input
                    type="number"
                    className="form-control"
                    id="vote"
                    name="vote"
                    min="1"
                    max="5"
                    placeholder='1 to 5 star'
                    value={formData.vote}
                    onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) })}
                    required />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label">Your Review</label>
                <textarea
                    className="form-control"
                    id="text"
                    name="text"
                    rows="3"
                    placeholder='Write your review...'
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    required>
                </textarea>
            </div>

            <button type="submit" className="btn btn-dark">Submit Review</button>
        </form>
    )
}


