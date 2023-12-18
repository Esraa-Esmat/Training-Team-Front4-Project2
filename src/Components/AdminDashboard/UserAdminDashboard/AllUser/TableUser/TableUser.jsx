import React from 'react'
import { Table } from 'react-bootstrap'
import { UsersDataHeader } from '../../../../DummyData/DummyData'
import TableBody from './TableBody'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'


const TableUser = () => {
    const { t, i18n } = useTranslation();
    const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

    return (
        <Table hover className={`mt-4 ${toggleDark ? 'table-dark' : 'table-light'}`}>
            <thead className="table-header">
                {/* <RenderTableHead DataHeader={HeaderData} /> */}
                <tr >
                    {UsersDataHeader.map((data) => (
                        <th>{i18n.language === 'en' ? data.title : data.titleAr}</th>
                    ))}
                </tr>
            </thead>


            <tbody className="table-body">
                <TableBody />
            </tbody>
        </Table>
    )
}

export default TableUser