import { useState } from 'react'
import './styles.css'

const Login = () => {
    const [username, setUsername] = useState('')

    const handleChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }


	return (
		<form className='mx-auto border p-2 m-2' id='login-form' onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='exampleInputUser1' className='form-label'>
					Username
				</label>
				<input
					type='text'
					className='form-control'
					id='exampleInputUser1'
					aria-describedby='userHelp'
                    value={username}
                    onChange={handleChange}
				/>
				<div id='userHelp' className='form-text'>
					We will lie to you.
				</div>
			</div>
			<div className='mb-3'>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword1'
				/>
			</div>

			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};

export default Login;
