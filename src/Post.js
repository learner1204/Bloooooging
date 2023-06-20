export default function Post(){
    return (
        <div className='post'>
        <div className="image">
          <img src="https://neilpatel.com/wp-content/uploads/2023/02/Tips-for-Writing-a-Blog-Post-in-Under-60-Minutes.jpg" alt="guygugu"></img>
        </div>
        <div className="texts">
          <h2>Type cd \ into the prompt to go back to the directory.</h2>
          <p className="info">
            <a className="author">Roshan</a>
            <time>2023-06-20 16:45</time>
          </p>
          <p className="summary">If you need to navigate from a location back to the main command prompt, this command takes you back immediately.</p>
        </div>
      </div>
    );
}