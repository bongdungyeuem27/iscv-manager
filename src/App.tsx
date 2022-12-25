import { Route, Routes } from 'react-router-dom';
import './styles/global.css';
import Home from '~pages/Home';
import { Dashboard } from '~layouts/index';
import Business from '~pages/Business';
import Transaction from '~pages/Transaction';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Main } from './middlewares';

type Props = {};

const App = (props: Props) => {
    return (
        <Provider store={store}>
            <div className=" text-black">
                <Routes>
                    <Route path="" element={<Main></Main>}>
                        <Route path="" element={<Dashboard></Dashboard>}>
                            <Route path="home" element={<Home></Home>}></Route>
                            <Route path="transaction" element={<Transaction></Transaction>}></Route>
                            <Route path="business" element={<Business></Business>}></Route>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </Provider>
    );
};

export default App;
