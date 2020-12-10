import React from "react"
import { CustomerTable } from "./CustomerTable"


export const CustomerTableList=()=>{
    return (
        <>
        <table>
                <thead>
                    <tr>
                        <th>
                            Item
                        </th>
                        <th>
                            Number
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <CustomerTable></CustomerTable>

                </tbody>

            </table>
        </>
    )
}