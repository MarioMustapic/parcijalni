import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { GitHubUserApi } from './components/GitHubUserApi';
import { InputElement } from './components/InputElement';

function App() {
  const [formState, setFormState] = useState({ username: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.username !== '') {
      setFormState({ username: '' });
    }
  }

  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }
  console.log(formState);
  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
      <InputElement
            name="username"
            label="GitHub username"
            placeholder="e. g. facebook"
            type="text"
            onChange={handleChange}
          />
      </form>
      </div>
      <div>
        <Button type="submit" >Search</Button>
      </div>
      <GitHubUserApi username={formState.username}/>
    </div>
  );
}

export default App;
