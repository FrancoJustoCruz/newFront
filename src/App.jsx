import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import EditProfile from './pages/EditProfile'
import UploadVideoPage from './pages/UploadVideoPage'

import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from './context/TasksContext'
import { VideoProvider } from './context/VideoContext'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <AuthProvider>
      <VideoProvider>
      <TaskProvider>
      
      <BrowserRouter>
      <main className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        
        <Route element={<ProtectedRoute/>}>
        <Route path='/tasks' element={<TasksPage/>}/>
        <Route path='/videos' element={<UploadVideoPage/>}/>
        <Route path='/add-task' element={<TaskFormPage/>}/>
        <Route path='/tasks/:id' element={<TaskFormPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        </Route>
      </Routes>
      </main>
    </BrowserRouter>
    </TaskProvider>
    </VideoProvider>
      
    </AuthProvider>
  )
}

export default App
