import './App.css';
import Homepage from './pages';
// import Card from './components/Card';

function App() {
  return (
    <div className="">
      <Homepage/>

      {/* Latihan buat Card */}
      {/* <Card
        image={'/Jogja.jpeg'}
        altImage={'Yogyakarta'}
        title={'Yogyakarta'}
        rating={2}
        reviewCount={'894'}
        secondaryText={'Candi Borobudur'}
        description={'Yogyakarta salah satu kota sejarah yang ada peninggalan era kerajaan yaitu Candi Borobudur,'}
      />
      <Card
        image={'/Bali.jpeg'}
        title={'Bali'}
        rating={3}
        reviewCount={820}
        secondaryText={'Pulau Dewata'}
        description={'Bali terkenal dengan pantainya yang indah dan budayanya yang unik...'}
      /> */}
    </div>
  );
}

export default App;
