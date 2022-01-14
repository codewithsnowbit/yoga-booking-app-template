import React from 'react'
import Card from './components/Card'
import batch from './batch/batch'
export default function Home() {
    // Map through the cards and return the JSX code to render
    const batchList = batch.map((batches, i) => {
        return <Card key={i} batch={batches.title} location={batches.location} time={batches.time} date={batches.date} slug={batches.slug} />
    })
    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-3">Yoga Class</h1>
            {batchList}
        </div>
    )
}
