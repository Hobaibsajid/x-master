import React from 'react'

export default function MyCard({ name, fname, dob, contact, addresss }) {
    return (
        <section className="flex flex-col border border-gray-500 rounded-xl w-full h-40 bg-red-500/30">
            <h1>{name}</h1>
            <h1>{fname}</h1>
            <h1>{dob}</h1>
            <h1>{contact}</h1>
            <h1>{addresss}</h1>
        </section>
    )
}
