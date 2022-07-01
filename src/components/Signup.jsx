
const Signup = () => {
  const Submit = () => {

  }

  return (
    <section className='Cont-Login'>
      <form className='form-SignUp' onSubmit={Submit}>
        <div>
          <h3>SignUp</h3>
        </div>
        <div className='cont-inp'>
          <input
            required
            name='FirstName'
            placeholder='First Name'
            type='text'
            className='form-input'
          />
        </div>
        <div className='cont-inp'>
          <input
            required
            name='LastName'
            placeholder='LastName'
            type='text'
            className='form-input'
          />
        </div>
        <div className='cont-inp'>
          <input
            required
            name='BirthDate'
            placeholder='Birth Day'
            type='date'
            className='form-input'
          />
        </div>
        <div className='cont-inp'>
          <div className='Gender'>
            <input
              required
              name='Male'
              type='radio'
            />Male
          </div>
          <div className='Gender'>
            <input
              required
              name='Female'
              type='radio'
            />Female
          </div>
        </div>
        <div className='cont-inp'>
          <input
            required
            name='Email'
            placeholder='E-mail'
            type='email'
            className='form-input'
          />
        </div>
        <div className='cont-inp'>
          <input
            required
            name='Password'
            placeholder='Password'
            type='password'
            className='form-input'
          />
        </div>
        <button type='submit' className='Login-btn'>SignUp</button>
      </form>
    </section>
  )
}

export default Signup
