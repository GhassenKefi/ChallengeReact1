import Video from '../Component/Video'
import { suggestions } from "../Component/Data"

export default function SideBar() {

    const listItems = suggestions.map((video) =>
    <Video {...video}></Video>
    );
    
    return (
        <div className="sidebar">
            {listItems}
        </div>
    );
}
