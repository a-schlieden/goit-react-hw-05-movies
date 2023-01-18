import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AdditionalLinks = () => {
    const location = useLocation().state?.from ?? '/';

    return (
        <>
            <hr />
            <p>Additional Information</p>
            <ul>
                <li>
                    <Link to="cast" state={{ from: location }}>
                        Cast
                    </Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: location }}>
                        Review
                    </Link>
                </li>

            </ul>
            <hr />
        </>
    )
}

export default AdditionalLinks