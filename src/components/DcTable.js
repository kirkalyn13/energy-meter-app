import React from 'react'

const DcTable = ({finalVoltage, finalCurrent, finalPower, netEnergy,importEnergy, exportEnergy }) => {
    return (
        <div className="container-dctable">
            <h1>DC BATTERY METRICS</h1>
            <table>
                <thead>
                    <tr>
                        <th>DC Voltage (Vdc)</th>
                        <th>DC Current (Idc)</th>
                        <th>DC Power (Wdc)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{finalVoltage}</td>
                        <td>{finalCurrent}</td>
                        <td>{finalPower}</td>
                    </tr>
                </tbody>
                <thead>
                    <th>DC Accumulated Net Energy (Wh-dc)</th>
                    <th>DC Accumulated Import Energy (Wh-dc)</th>
                    <th>DC Accumulated Export Energy (Wh-dc)</th>
                </thead>
                <tbody>
                    <td>{netEnergy}</td>
                    <td>{importEnergy}</td>
                    <td>{exportEnergy}</td>
                </tbody>
            </table>
        </div>
    )
}

export default DcTable
