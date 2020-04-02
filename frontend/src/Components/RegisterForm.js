import React from 'react'

const RegisterForm = ({ handleSubmit, handleChange, errors, data }) => {
  console.log(data)
  const { email, username, password, passwordConfirmation } = data
  return <form
    className="form"
    onSubmit={(event) => handleSubmit(event)}
  >
    <div className="field">
      <label className="label">
        Email
      </label>
      <div className="control has-icons-left">
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="email"
          className="input"
          value={email}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
      </div>
      {errors.email && <small className="help is-danger">
        {errors.email.message}
      </small>}
    </div>
    <div className="field">
      <label className="label">
        Username
      </label>
      <div className="control has-icons-left">
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="username"
          className="input"
          value={username}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-user"></i>
        </span>
      </div>
      {errors.username && <small className="help is-danger">
        {errors.username.message}
      </small>}
    </div>
    <div className="field">
      <label className="label">
        Password
      </label>
      <div className="control has-icons-left">
        <input
          onChange={(event) => handleChange(event)}
          type="password"
          name="password"
          className="input"
          value={password}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
      </div>
      {errors.password && <small className="help is-danger">
        {errors.password.message}
      </small>}
    </div>
    <div className="field">
      <label className="label">
        Confirm Password
      </label>
      <div className="control has-icons-left">
        <input
          onChange={(event) => handleChange(event)}
          type="password"
          name="passwordConfirmation"
          className="input"
          value={passwordConfirmation}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
      </div>
      {errors.passwordConfirmation && <small className="help is-danger">
        {errors.passwordConfirmation.message}
      </small>}
    </div>
    <label for="avatar">Choose a profile picture:</label>

    <input type="file"
      id="avatar" name="avatar"
      accept="image/png, image/jpeg" />



    <button className="button is-success">
      Register
    </button>
  </form>
}

export default RegisterForm