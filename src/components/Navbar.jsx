import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../public/icons/icon.svg'
import Prof from '../../public/icons/home/prof.svg'
import '../styles/navbar.css'
function Navbar() {
	return (
		<nav>
			<div className='logo'>
				<img src={Logo} alt="" />
				<p>kosolution</p>
			</div>
			<ul>
				<li>
					<Link className='txt'>BERANDA</Link>
				</li>
				<li>
					<Link className='txt'>LAYANAN</Link>
				</li>
			</ul>
			<div className='prof-container'>
				<Link className='prof'>
					<img src={Prof} alt="" />
					<p>levi.ack</p>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar