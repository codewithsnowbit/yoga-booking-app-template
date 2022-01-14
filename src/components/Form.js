import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import db from '../firebase'

export default function Form() {
    const {slug} = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleSave = () => {
        db.collection('batches').doc(slug).collection('attendees').add({
            name: name,
            email: email
        }).then(() => {
            alert('Attendee added successfully')
        })
    }
    return (
        <div>
            <h1 className="text-center">Book for <b>{slug}</b></h1>
            <input type="email" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
            <button className="btn btn-dark" onClick={handleSave}>Submit</button>
        </div>
    )
}
