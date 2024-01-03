import React from 'react'
import { Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import TableBody from './TableBody'
import { ServicesDataHeaderUserDashboard } from '../../../../DummyData/DummyData'
import { useSelector } from 'react-redux'

const TableServices = () => {
    const { t, i18n } = useTranslation();
    const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

    const DataLang = ServicesDataHeaderUserDashboard.map((data) => {
        if (i18n.language === 'ar') {
            return ({
                'id': data.id,
                'title': data.titleAr,
            })
        }
        return data;
    })

    return (
        <Table hover className={`my-3 ${toggleDark ? 'table-dark ' : 'table-light'}`}>
            <thead className="table-header">
                <tr >
                    {DataLang.map((data) => (
                        <th>{data.title}</th>
                    ))}
                </tr>
            </thead>


            <tbody className="table-body">
                <TableBody />
            </tbody>
        </Table>
    )
}

export default TableServices