import { Header } from './components'
import { PlannerPage, StreamingEditorPage, HomePage } from './pages'
import { Route, BrowserRouter, Routes, Outlet } from 'react-router-dom'
import { Constants } from './data/Constants'
import './styling/styling.scss'

export const App = () => {
    const classPrefix = 'my-app'

    const _AppWrapper = () => {
        return (
            <div className={`${classPrefix} colors`}>
                <Header />
                <Outlet />
                <footer></footer>
            </div>
        )
    }

    return (
        <div className={`${classPrefix}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={_AppWrapper()}>
                        <Route
                            index
                            element={<HomePage/>}
                        >
                        </Route>
                        <Route
                            path={Constants.paths.planner}
                            element={<PlannerPage />}
                        />
                        <Route
                            path={Constants.paths.streamEditor}
                            element={<StreamingEditorPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
