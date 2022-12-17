import {useState} from "react";
import './App.css'


function App() {
    const [drag, setDrag] = useState(false);

    function dragStartAndOverHandler(event) {
        event.preventDefault();
        setDrag(true);
    }

    function dragleaveHandler(event) {
        event.preventDefault();
        setDrag(false);
    }

    function dropHandler(event) {
        event.preventDefault();
        let files = [...event.dataTransfer.files]
        console.log(files);
        const formData = new FormData();
        formData.append('picture', files[0]);
        console.log(formData)
        setDrag(false)
    }

    return (
        <div className="App">
            {drag
                ? <div
                    className='download-area'
                    onDragStart={event => dragStartAndOverHandler(event)}
                    onDragLeave={event => dragleaveHandler(event)}
                    onDragOver={event => dragStartAndOverHandler(event)}
                    onDrop={event => dropHandler(event)}
                >
                    Отпусти файл
                </div>
                : <div
                    className='drop-area'
                    onDragStart={event => dragStartAndOverHandler(event)}
                    onDragLeave={event => dragleaveHandler(event)}
                    onDragOver={event => dragStartAndOverHandler(event)}
                >
                    Закинь файл
                </div>
            }
        </div>
    );
}

export default App;
