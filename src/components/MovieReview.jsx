import StarRating from '../components/StarRating'

export default function MovieReview({ userReview }) {

    const { id, name, text, vote, star } = userReview;

    return (

        <li key={id} className="list-group-item">
            <strong><i className="bi bi-person"></i> {name}:</strong>
            <p>{text}</p>
            <span>Voto: {StarRating(vote)}</span>
        </li>

    )

}