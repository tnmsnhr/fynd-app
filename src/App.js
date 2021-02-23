import styles from './App.module.css';
import Leftbar from './components/Leftbar/Leftbar';
import './utilities.css';

function App() {
  return (
    <div className={styles.main__page}>
      <div className="leftbar__container">
        <Leftbar />
      </div>
    </div>
  );
}

export default App;
