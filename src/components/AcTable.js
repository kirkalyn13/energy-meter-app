import React from 'react'

const AcTable = ({finalVoltage, finalCurrent, realPower, apparentPower, powerFactor, netEnergy, importEnergy, exportEnergy, frequency}) => {
    return (
        <div className="container-actable">
            <h1>AC POWER METRICS</h1>
            <table>
                <thead>
                    <tr>
                        <th>AC Voltage (RMS)(Vac)</th>
                        <th>AC Current (RMS)(Iac)</th>
                        <th>AC Power (Wac)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{finalVoltage}</td>
                        <td>{finalCurrent}</td>
                        <td>{realPower}</td>
                    </tr>
                </tbody>
                <thead>
                    <th>AC Apparent Power (VAac)</th>
                    <th>Power Factor (Pf)</th>
                    <th>AC Accumulated Net Energy (Wh-ac)</th>
                </thead>
                <tbody>
                    <td>{apparentPower}</td>
                    <td>{powerFactor}</td>
                    <td>{netEnergy}</td>
                </tbody>
                <thead>
                    <th>AC Accumulated Import Energy (Wh-ac)</th>
                    <th>AC Accumulated Export Energy (Wh-ac)</th>
                    <th>Frequency (Hz)</th>
                </thead>
                <tbody>
                    <td>{importEnergy}</td>
                    <td>{exportEnergy}</td>
                    <td>{frequency}</td>
                </tbody>
            </table>
        </div>
    )
}

export default AcTable
