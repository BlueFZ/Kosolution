import '../styles/login.css'
import Arrow from '../../public/icons/log&reg/arrow.svg'
import { Link } from 'react-router-dom'

function Login() {

	return (
		<>
			<div 
			className="container">
				<div className="box">
					<section className='header'>
						<h1>Log In</h1>
					</section>

					<form className='form'>
						<div className="user-container">
							<input 
							className='user' 
							type="text" 
							placeholder='Masukkan nama / username' 
								/>
						</div>

						<div className="pass-container">
							<input 
							className='pass' 
							type="password" 
							placeholder='Masukkan sandi' 
							/>
						</div>

						<div className="button-container">
							<Link className='link' to='/home'>
								<input type='submit' className='button' value='Log In'/>
							</Link>
							<img className='arrow' src={Arrow} alt="" />
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login