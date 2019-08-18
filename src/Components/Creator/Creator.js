import React from 'react';
import './Creator.css'

const Creator = () => {
    function getNameHandler(e) {
        const nameComp = document.getElementById('componentName').value
        let typeOfComp = document.getElementsByName('type');

        if (nameComp === '') {
            e.preventDefault();
            document.getElementById('result').innerHTML = 'Please choose a name'
            return false;
        } else {
            for (var i = 0, length = typeOfComp.length; i < length; i++) {
                if (typeOfComp[i].checked) {
                    typeOfComp = typeOfComp[i].value;
                    break;
                }
            }
        }



        if (typeOfComp === 'class') {
            document.getElementById('result').innerHTML =
                `import React, { Component } from 'react'; <br/><br/>
                class ${nameComp} extends Component { <br />
                    &emsp;render(){<br />
                        &emsp;&emsp;return ( <br />
                        &emsp;&emsp;) <br />
                    &emsp;}<br />
                }<br />
                export default ${nameComp};
                `
        } else {
            document.getElementById('result').innerHTML =
                `import React from 'react'; <br/><br/>
                const ${nameComp} = () => { <br />
                        &emsp;return ( <br />
                        &emsp;) <br />
                }<br />
                export default ${nameComp};
                `
        }
    }

    return (
        <form noValidate autoComplete="off" id='createComp' >
            <div className='item'>
                <input
                    type="text"
                    id="componentName"
                    name="componentName"
                    placeholder="Component Name" required />
            </div>
            <div className='item'>
                <input
                    type="radio"
                    id="class"
                    value='class'
                    name="type" required />
                <label htmlFor="class">class</label>
                <input
                    type="radio"
                    id="function"
                    value='function'
                    name="type" required />
                <label htmlFor="function">function</label>
            </div>
            <div className='item'>
                <button
                    type="button"
                    value="Submit"
                    form='createComp'
                    onClick={getNameHandler}>
                    Submit
                </button>
            </div>
        </form >
    )
}
export default Creator;