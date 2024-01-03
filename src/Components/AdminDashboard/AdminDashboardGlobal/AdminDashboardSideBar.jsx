import { Button, Container } from 'react-bootstrap';
import { AdminSidebarData } from '../../DummyData/DummyData';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink } from '../../../Redux/Reducers/AdminSlice';
import './AdminDashboard.css'
import { setLogout } from '../../../Redux/Reducers/UserSlice';

const AdminDashboardSideBar = () => {
    
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activeLink = useSelector((state) => state.AdminSlice.activeLink);


    const DataLang = AdminSidebarData.map((data) => {
        if (i18n.language === 'ar') {
            return ({
                'id': data.id,
                'title': data.titleAr,
                'path': data.path,
                'data': data.dataAr
            })
        }
        return data;
    })

    const onUpdateActiveLink = (value) => {
        dispatch(setActiveLink(value));
    }
    const handleSelectTitle = (title) => {
        { title == 'settings' && navigate('/settingsadmindashboard') }
    }
    const handleLogout = () => {
        navigate('/')
        dispatch(setLogout(false));
    };

    return (
        <Container >
            <div className="bg-primary rounded-bottom text-capitalize pt-5 d-none d-xl-block">
                <div className='text-light fw-bold text-center mb-5'>
                    <h3>Dashboard</h3>
                </div>
                {DataLang.map((section) => (
                    <div key={section.id} className='my-2 sideBar'>
                        <h6
                            className={`d-block text-light bg-black bg-opacity-25 rounded fw-bold py-2 px-4 text-decoration-none ${section.title.toLowerCase() === 'settings' ? 'pointer' : ''}`}
                            onClick={() => handleSelectTitle(section.title.toLowerCase())}
                        >
                            {section.title}

                        </h6>
                        <ul className="list-unstyled px-4 link-info">
                            {section.data.map((sub, j) => (
                                <li key={j}>
                                    <Link
                                        className={`btn p-0 p-2 active-scale clickable ${activeLink === sub.toLowerCase() ? 'text-primary bg-light' : 'text-light bg-primary'}`}
                                        style={{ transformOrigin: 'left' }}
                                        to={section.path[j]}
                                        onClick={() => onUpdateActiveLink(sub.toLowerCase())}
                                    >
                                        {sub}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
                }
                <Button variant='dark' onClick={handleLogout} className='w-100 rounded-0 rounded-bottom mt-2'>{t('Logout')}</Button>

            </div >
        </Container >
    );
}

export default AdminDashboardSideBar

