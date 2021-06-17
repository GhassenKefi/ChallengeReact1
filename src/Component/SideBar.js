import ReactPlayer from "react-player";
import { suggestions } from "../Component/Data"

export default function SideBar() {

    const listItems = suggestions.map((video) =>
        <ReactPlayer
            className='react-player'
            url={video.url}
            width='100%'
            height='100%'
        />


    );
    return (
        <div className="sidebar">
            {listItems}
        </div>
    );
}
