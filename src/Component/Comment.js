function Comment(props) {
    return (
        <div className="Comment">
        <div className="UserInfo">
          <div className="UserInfo-name">
            {props.name} 
            <br></br>
            <div className="user-email">{props.email}</div>
          </div>
        </div>
        <div className="Comment-text">
          {props.body}
        </div>
        <hr></hr>
      </div>
    );
}

export default Comment;
