import React, { useState } from 'react'
// import './BookingForm.css'

function BookingForm() {
    const [bookingConfirmed, setBookingConfirmed] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [numOfPeople, setNumOfPeople] = useState(1)
    const [date, setDate] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // Code to submit the form data and confirm the booking goes here
        setBookingConfirmed(true)
    }

    return (
        <div className="form-container">
            {bookingConfirmed ? (
                <p>
                    THANK YOU! <br></br>When the reservation is confirmed we
                    will send you an email.
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                    </label>
                    <label>
                        Number of people:
                        <input
                            type="number"
                            value={numOfPeople}
                            onChange={(event) =>
                                setNumOfPeople(event.target.value)
                            }
                            min="1"
                            max="10"
                        />
                    </label>
                    <button type="submit">BOOK TABLE</button>
                </form>
            )}
        </div>
    )
}

export default BookingForm
