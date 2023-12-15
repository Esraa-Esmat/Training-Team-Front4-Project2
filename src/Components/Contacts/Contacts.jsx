import React from 'react'
import "./Contacts.css"
import ContactInfo from './ContactInfo'
import ContactsForm from './ContactsForm'
import ExploreBlogs from '../Blogs/ExploreBlogs';
import { useTranslation } from 'react-i18next';


const Contacts = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className='container py-3'>


        <div className="py-5 headerContacts p-5">
          <div className="text-center container">
            <h2 style={{ fontSize: "48px", fontFamily: "Mulish", fontWeight: "Bold" }}>{t('Contact Us')}</h2>
            <p className="my-4" style={{ fontFamily: "sans-serif", fontSize: "20px" }}>{t('Tax Hub sees itself as a partner to each of its clients - supporting and providing reliable and intelligent business solutions and maintaining dynamic professional relationship.')}</p>
          </div>
        </div>
        <ContactsForm />
        <ContactInfo />
        <ExploreBlogs/>
      </div>

    </>
  )
}


export default Contacts