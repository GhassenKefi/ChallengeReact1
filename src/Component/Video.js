import ReactPlayer from "react-player";

export default function Video(props){
    return(<div>
        <ReactPlayer
            className='react-player'
            url={props.url}
            width='100%'
            height='100%'
        />
        <div className="views">
            {props.views}
        </div>
        <br></br>
    </div>

        );
}