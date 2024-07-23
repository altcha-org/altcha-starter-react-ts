import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importing altcha package will introduce a new element <altcha-widget>
import 'altcha'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <form action="#">
        <fieldset>
          <label>Name:</label>
          <input type="text" name="name" />
        </fieldset>

        <fieldset>
          <label>Message:</label>
          <textarea name="message"></textarea>
        </fieldset>

        <fieldset>
          {/* Configure your `challengeurl` and remove the `test` attribute, see docs: https://altcha.org/docs/website-integration/#using-altcha-widget  */}
          <altcha-widget
            style={{
              '--altcha-max-width': '100%',
            }}
            debug
            test
          ></altcha-widget>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
