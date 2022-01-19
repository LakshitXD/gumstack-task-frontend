import './App.css'
import Card from './Component/Card'
import AddPlace from './Component/AddPlace'

function App() {
  return (
    <div>
      <h1 style={{ fontSize: '5rem', marginBottom: '10rem' }} align="center">Places I have Visited 😶‍🌫️</h1>
      <AddPlace />
      <Card />
    </div>
  )
}

export default App
