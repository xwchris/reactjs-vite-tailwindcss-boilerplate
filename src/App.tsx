import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import routes from 'routes'

import { addRxPlugin } from 'rxdb'
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode'
import { RxDBUpdatePlugin } from 'rxdb/plugins/update'
// import { RxDBMigrationPlugin } from 'rxdb/plugins/migration-schema'

addRxPlugin(RxDBUpdatePlugin)
// addRxPlugin(RxDBMigrationPlugin)
if (import.meta.env.MODE === 'development') {
  addRxPlugin(RxDBDevModePlugin)
}
//
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
