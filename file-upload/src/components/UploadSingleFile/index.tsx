import { useState } from 'react';
import './style.css'

export function UploadSingleFile() {
    const [file, setFile] = useState<any>(null)

    function handleDrop(event: React.DragEvent<HTMLDivElement>):void {
        event.preventDefault()
        console.log(event.dataTransfer.files[0])
    }

    return <div className='single__upload__container' onDrop={handleDrop}>
        <div className="container__header">
            <div className="header__info">
                <h1 className='info__title'>File Upload</h1>
                <p className='info__description'>Drag and Drop files or click in the upload button to select one!</p>
            </div>

            <label htmlFor="file-input" className='input__label'>Add file</label>
            <input type="file" multiple={false} onChange={({ target }) => console.log(target.files)} id='file-input' className='header__input'/>
        </div>

        {!file && <p className='container__empty'>No files uploaded. Send .jpeg files.</p>}
        </div>
}