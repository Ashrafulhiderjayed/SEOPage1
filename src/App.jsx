import './App.css';
import FileColumn from './Components/FileColumn/FileColumn';

function App() {
  return (
    <div className="App">
      <h1>File Upload App</h1>
      <div className="file-columns">
        {[1, 2, 3, 4, 5].map((index) => (
          <FileColumn key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
