import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';


import { Main } from './components/header.jsx';
import { Counter } from './components/counter.jsx';


const App = (props) =>
{
    return (
        <div className='sectionStyle'>
            <Main/>
            <div className='listStyle'>
            <Counter/>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(App());































// import React from 'react';
// import * as ReactDOM from 'react-dom/client';
// import {DemoList} from './components/DemoList.jsx';
// import './styles/styles.scss'

// const CustomList = ({list = []}) => {
//     return React.createElement(
//         'ul',
//         null,
//         list.map((el, index) => React.createElement('li', {key: `${el}-${index}`, className: 'red'}, el))
//     )
// }



// const App = ({title}) => {
//     return (
//         <main>
//             <h1>{ title.toUpperCase() }</h1>
//             <CustomList list={['Item 1', 'Item 2', 'Item 3']} />
//             <DemoList />
//         </main>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('app'))
// root.render(App({title: 'Hello Students!!!!!'}));
