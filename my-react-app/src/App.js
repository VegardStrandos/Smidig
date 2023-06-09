import { Header } from './components'
import { PlannerPage, StreamingEditorPage, HomePage, DownloadPage, GoLivePage, StreamScriptPage, ProfilePage } from './pages'
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
                        <Route
                            path={Constants.paths.downloadPage}
                            element={<DownloadPage />}
                        />
                        <Route
                            path={Constants.paths.goLivePage}
                            element={<GoLivePage />}
                        />
                        <Route
                            path={Constants.paths.streamingScriptPage}
                            element={<StreamScriptPage />}
                        />
                        <Route
                            path={Constants.paths.profilePage}
                            element={<ProfilePage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
