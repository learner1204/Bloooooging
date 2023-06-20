import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog l</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className='post'>
        <div className="image">
          <img src="https://neilpatel.com/wp-content/uploads/2023/02/Tips-for-Writing-a-Blog-Post-in-Under-60-Minutes.jpg" alt="guygugu"></img>
        </div>
        <div className="texts">
          <h2>Type cd \ into the prompt to go back to the directory.</h2>
          <p>If you need to navigate from a location back to the main command prompt, this command takes you back immediately.</p>
        </div>
      </div>

      <div className='post'>
      <div className="image">
          <img src="https://neilpatel.com/wp-content/uploads/2023/02/Tips-for-Writing-a-Blog-Post-in-Under-60-Minutes.jpg" alt="guygugu"></img>
        </div>
        <div className="texts">
          <h2>Type cd \ into the prompt to go back to the directory.</h2>
          <p>If you need to navigate from a location back to the main command prompt, this command takes you back immediately.</p>
        </div>
      </div>

      <div className='post'>
      <div className="image">
          <img src="https://neilpatel.com/wp-content/uploads/2023/02/Tips-for-Writing-a-Blog-Post-in-Under-60-Minutes.jpg" alt="guygugu"></img>
        </div>
        <div className="texts">
          <h2>Type cd \ into the prompt to go back to the directory.</h2>
          <p>If you need to navigate from a location back to the main command prompt, this command takes you back immediately.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
