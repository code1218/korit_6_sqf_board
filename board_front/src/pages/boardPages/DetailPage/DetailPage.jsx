/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";


function DetailPage(props) {
    const params = useParams();
    const boardId = params.boardId;

    const board = useQuery();

    return (
        <div>
            <Link to={"/"}><h1>사이트 로고</h1></Link>
            <div>

                <div></div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default DetailPage;