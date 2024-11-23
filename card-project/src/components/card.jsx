import React from 'react'

const card = (props) => {
    {props.data.map((d)=>{
        return (
            <div  key={d.id}>
              <h1>user Id :{d.userId}</h1>
              <b>ID:{d.id}</b>
              <p>title:{d.title}</p>
              <p>body:{d.body}</p>
            </div>
          )
    })}
}

export default card
