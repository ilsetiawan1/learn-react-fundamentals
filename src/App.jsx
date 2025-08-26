import './App.css';
// import Card from './components/Card';
import Article from './components/Article'

function App() {
  return (
    <div className="grid grid-cols-4 p-6">
      <Article name="ilham" titles={["Reactjs", "Nextjs"]}></Article>
      <Article name="budi" titles={["Nodejs", "Expressjs"]}></Article>
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
