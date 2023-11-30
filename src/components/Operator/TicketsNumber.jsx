import React from "React"

// TODO: import it to the "Operator" component.

const TicketsNumber = (numberOfTickets) => {
    return (
        <>
        <label
            htmlFor="numberOfTickets"
            className="block text-sm font-medium text-gray-700"
        >
            Number of Tickets:
        </label>
        <input
            type="number"
            id="numberOfTickets"
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(parseInt(e.target.value))}
            className="mt-1 p-2 border rounded-md w-16"
        />
        </>
    )
}

export default TicketsNumber;
