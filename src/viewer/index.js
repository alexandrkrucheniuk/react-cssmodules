import React from 'react';
import ReactDOM from 'react-dom';
import Viewer from './components/viewer';

const mainElement = document.getElementById('twitch-extension-viewer');


if (window.Twitch.ext) {

    window.Twitch.ext.onAuthorized((auth) => {


        console.log('auth', auth);
    });

    window.Twitch.ext.onContext((context, contextFields) => {
        console.log('context', context);
        console.log('contextFields', contextFields);
    });

    window.Twitch.ext.onError((err) => {
        console.error('error', err);
    });

}

ReactDOM.render(
    <Viewer token = { 'asdasd' } />
    , mainElement);
