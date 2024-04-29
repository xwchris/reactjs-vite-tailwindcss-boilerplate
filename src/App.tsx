import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import routes from 'routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
