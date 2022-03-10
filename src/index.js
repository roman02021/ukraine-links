import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './iconLibrary';
import './i18next';
import ClipLoader from "react-spinners/ClipLoader";
import styled from 'styled-components';


const StyledLoaderContainer = styled(ClipLoader)`

`

const Loader = () => (
  <StyledLoaderContainer>
    <ClipLoader color="#FED600" size={150} />
</StyledLoaderContainer>
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
