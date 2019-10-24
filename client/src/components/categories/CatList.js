import React from 'react'

function Cat_List({ id, name, handleRemove }) {
    return (
        <tr><td>{name}</td><td><button className="btn btn-danger" onClick={() => {
            if (window.confirm('Are you sure you want to delete this category?')) {
                handleRemove(id)
            }
        }}>Delete</button></td></tr>

    )


}
export default Cat_List