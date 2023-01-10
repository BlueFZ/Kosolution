import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/register.css'

function Register() {
	return (
		<>
			<div className='container'>
				<div className="box">
					<section className='header'>
						<h1>Sign Up</h1>
					</section>

					<section className='form'>
						<div className="nama-container">
							<input type="text" className='nama' placeholder='Masukkan nama' required/>
						</div>
						<div className="user-container">
							<input type="text" className='user' placeholder='Masukkan username' required/>
						</div>
						<div className="hp-container">
							<input type="tel" className='telp' placeholder='Masukkan nomor HP' required/>
						</div>
						<div className="email-container">
							<input type="email" className='email' placeholder='Masukkan email' required/>
						</div>
						<div className="sandi-container">
							<input type="password" className='pass' placeholder='Masukkan sandi' required/>
						</div>
						<div className="verivy-container">
							<input type="password" className='verify' placeholder='Masukkan sandi lagi' required/>
						</div>
						<div className="btn-container">
							<Link to='/home'>
								<input type="submit" className='button' value= 'Buat Akun' />
							</Link>
						</div>
						<div className="punya-container">
							<p className='punya'>
								Sudah punya akun? 
								<Link className='link' to='/login'>
									<span> Log In</span>
								</Link>
							</p>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default Register