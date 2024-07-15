import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Genqrcode from '../pages/Genqrcode';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/' element={<Login/>}/>
                <Route path='/genqrcode' element={<Genqrcode/>}/>
                <Route path='/student' element={<Message/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;