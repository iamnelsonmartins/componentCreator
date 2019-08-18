import React from 'react'
import Grid from '@material-ui/core/Grid';
import Clipboard from 'clipboard';
import Filecopy from '@material-ui/icons/FileCopy'
import './Code.css'

const Code = () => {
    new Clipboard('.copyBtn');


    function copyStatus() {
        const fileCopied = document.querySelector('.fileCopied');
        fileCopied.style.opacity = 1
        setTimeout(
            function () {
                fileCopied.style.opacity = 0
            }, 1000)
    }

    return (
        <Grid item xs={12}>
            <div className='fileCopied'>Text Copied!</div>
            <div id='terminal' style={{ color: '#FFF' }} >
                <button
                    className='copyBtn'
                    data-clipboard-target="#result"
                    onClick={copyStatus}
                >
                    <Filecopy />
                </button>
                <div id='result'>Choose your component name and type (Class or Function)</div>
            </div>
        </Grid >
    )
}

export default Code;