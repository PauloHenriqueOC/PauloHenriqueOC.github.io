import './Home.css'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
        <Link to='fe-mentor/qr-code' >
            <button >QrCode</button>
        </Link>

        <Link to='fe-mentor/qr-code' >
            <button >QrCode</button>
        </Link>

        <Link to='fe-mentor/qr-code' >
            <button >QrCode</button>
        </Link>
    </div>
  )
}

export default Home