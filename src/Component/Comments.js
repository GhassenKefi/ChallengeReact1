import Comment from "./Comment";
import { commentList } from "../Component/Data"

export default function Comments() {

    const listItems = commentList.map((comment) =>
        <Comment {...comment}></Comment>

    );
    return (
        <div>{listItems}</div>
    );
}