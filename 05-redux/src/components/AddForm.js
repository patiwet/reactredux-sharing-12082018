import React from 'react'

const AddForm = ({onSubmit, text, onChangeText}) => 
    (<div className="card">
        <div className="card-header">Add Todo Form</div>
        <div className="card-body">
            <form className='form-inline' onSubmit={onSubmit}>
                <div className='form-group mx-sm-3 mb-2'>
                    <input value={text} onChange={onChangeText} />
                </div>
                <button type='submit' className='btn btn-primary mb-2'>Submit</button>
            </form>
        </div>
    </div>)

export default AddForm
