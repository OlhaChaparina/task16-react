import './App.css';
import Post from './Components/post';


const Kylie_Jenner =
  'https://akns-images.eonline.com/eol_images/Entire_Site/2023617/rs_1024x1024-230717185759-358399228_802408348185457_1255374735575780305_n.jpg?fit=around%7C1024:1024&output-quality=90&crop=1024:1024;center,top';

const Avatar = 'https://media.glamourmagazine.co.uk/photos/644b8f69956bd7a79f289d3c/1:1/w_1280,h_1280,c_limit/KYLIE%20JENNER%20280423%20GettyImages-1473117850.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Post author={{
          name: "kyliejenner",
          photo: Avatar,
          nickname: "@dart_vader"
        }}
          content="thank you for the birthday wishes XOXO"
          image={Kylie_Jenner}
          date={"20 серпня"}
        />

      </div>
    </div>
  );
}

export default App;