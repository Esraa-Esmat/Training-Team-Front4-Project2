import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";
import BlogsFeatured from '../../assest/images/Blogs Featured Image.png'

export const NavbarData = [
  {
    id: 1,
    title: 'Home',
    titleAr: 'الصفحة الرئيسية',
  },
  {
    id: 2,
    title: 'About',
    titleAr: 'حول',
  },
  {
    id: 3,
    title: 'Services',
    titleAr: 'الخدمات',
  },
  {
    id: 4,
    title: 'Blog',
    titleAr: 'المدونة',
  },
  {
    id: 5,
    title: 'Contact Us',
    titleAr: 'اتصل بنا',
  },

]

export const AdminSidebarData = [
  {
    id: 21,
    title: 'Users',
    titleAr: 'المستخدمون',
    path: ['/useradmindashboard', '/addnewuseradmindashboard'],
    data: ['All Users', 'Add New User'],
    dataAr: ['جميع المستخدمين', ' إضافة جديد'],
  },
  {
    id: 22,
    title: 'Blogs',
    titleAr: 'المدونات',
    path: ['/blogsadmindashboard', '/addnewblogsadmindashboard'],
    data: ['All Blogs', 'Add New Bolg'],
    dataAr: ['جميع المدونات', ' إضافة جديد'],
  },
  {
    id: 23,
    title: 'Services',
    titleAr: 'الخدمات',
    path: ['/servicesadmindashboard', '/servicesadmindashboard', '/servicesadmindashboard'],
    data: ['Unread', 'Ongoing', 'All Services'],
    dataAr: ['غير مقروء', ' جاري', 'جميع الخدمات'],
  },
  {
    id: 24,
    title: 'Settings',
    titleAr: 'الإعدادات',
    path: ['/settingsadmindashboard'],
    data: [],
    dataAr: [],
  },
];

export const ServicesDataHeader = [
  {
    id: 89,
    title: '',
    titleAr: ''
  },
  {
    id: 90,
    title: '#',
    titleAr: ''
  },
  {
    id: 91,
    title: '',
    titleAr: ''
  },
  {
    id: 92,
    title: 'Service',
    titleAr: 'الخدمة'
  },
  {
    id: 93,
    title: 'Serial-code',
    titleAr: 'الكود التسلسلي'
  },
  {
    id: 94,
    title: 'User',
    titleAr: 'المستخدم'
  },
  {
    id: 95,
    title: 'Date',
    titleAr: 'التاريخ'
  },
  {
    id: 96,
    title: 'Actions',
    titleAr: 'الإجراءات'
  },
];

export const ServicesData = [
  {
    id: "01",
    title: 'Services',
    tilteAr: 'خدمات',
    service: "VAT",
    servicesAr: 'ضريبة القيمة المضافة',
    user: 'Taxes',
    userAr: 'الضرائب',
    SerialCode: "#123-456ABC",
    uploadDate: "10-01-2025",
    date: "10-01-2025",
    action: ["Add milestone", "Delete"],
    actionAr: ['إضافة معلم', 'حذف']

  },
  {
    id: "02",
    title: 'Services',
    tilteAr: 'خدمات',
    service: "withhold tax",
    servicesAr: 'ضريبة الاستقطاع',
    user: 'Taxes',
    userAr: 'الضرائب',
    SerialCode: "#123-456ABV",
    uploadDate: "11-02-2025",
    date: "11-02-2025",
    actionAr: ['مكتمل'],
    action: ["completed"],
  },
  {
    id: "03",
    title: 'Services',
    tilteAr: 'خدمات',
    service: "payroll tax",
    servicesAr: 'ضريبة المرتبات',
    user: 'Taxes',
    userAr: 'الضرائب',
    SerialCode: "#123-456ABV",
    uploadDate: "08-04-2025",
    date: "08-04-2025",
    action: ["Add milestone", "Delete"],
    actionAr: ['إضافة معلم', 'حذف']


  },
  {
    id: "04",
    title: 'Services',
    tilteAr: 'خدمات',
    service: "annual income",
    servicesAr: 'الدخل السنوي',
    user: 'Taxes',
    userAr: 'الضرائب',
    SerialCode: "#123-456ABC",
    uploadDate: "05-06-2025",
    date: "05-06-2025",
    actionAr: ['مكتمل'],
    action: ["completed"],

  },
  {
    id: "05",
    title: 'Services',
    tilteAr: 'خدمات',
    service: "annual balance",
    servicesAr: 'الرصيد السنوي',
    user: 'Taxes',
    userAr: 'الضرائب',
    SerialCode: "#123-456ABC",
    uploadDate: "09-08-2025",
    date: "09-08-2025",
    action: ["Add milestone", "Delete"],
    actionAr: ['إضافة معلم', 'حذف']


  },
  {
    id: "06",
    title: 'Services',
    tilteAr: 'خدمات',
    service: "withhold tax",
    servicesAr: 'ضريبة الاستقطاع',
    user: 'Taxes',
    userAr: 'الضرائب',
    SerialCode: "#123-456ABV",
    uploadDate: "07-10-2025",
    date: "07-10-2025",
    actionAr: ['مكتمل'],
    action: ["completed"],

  },
  {
    id: "07",
    title: 'Services',
    tilteAr: 'خدمات',
    service: "payroll tax",
    servicesAr: 'ضريبة المرتبات',
    user: 'Taxes',
    userAr: 'الضرائب',
    SerialCode: "#123-456ABV",
    uploadDate: "12-12-2025",
    date: "12-12-2025",
    action: ["Add milestone", "Delete"],
    actionAr: ['إضافة معلم', 'حذف']


  },
];

export const UsersDataHeader = [
  {
    id: 79,
    title: '',
  },
  {
    id: 80,
    title: '#',
  },
  {
    id: 81,
    title: '',
  },
  {
    id: 82,
    title: 'Username',
    titleAr: 'اسم المستخدم'
  },
  {
    id: 83,
    title: 'Email',
    titleAr: 'البريد الإلكتروني'
  },
  {
    id: 84,
    title: 'Company',
    titleAr: 'الشركة'
  },
  {
    id: 85,
    title: 'Date',
    titleAr: 'التاريخ'
  },
  {
    id: 86,
    title: 'Actions',
    titleAr: 'الإجراءات'
  },
]
export const UsersData = [
  {
    id: "01",
    title: 'Users',
    titleAr: 'المستخدمون',
    username: "Esraa Esmat",
    usernameAr: 'إسراء عصمت',
    email: "example@email.com",
    company: "Taxs",
    companyAr: 'ضرائب',
    date: "12-05-2023",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "02",
    title: 'Users',
    titleAr: 'المستخدمون',
    username: "Doaa Mahmoud",
    usernameAr: 'دعاء محمود',
    email: "example@email.com",
    company: "Taxs",
    companyAr: 'ضرائب',
    date: "05-11-2023",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "03",
    title: 'Users',
    titleAr: 'المستخدمون',
    username: "Ahmed Moharam",
    usernameAr: 'أحمد محرم',
    email: "example@email.com",
    company: "Taxs",
    companyAr: 'ضرائب',
    date: "10-09-2023",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "04",
    title: 'Users',
    titleAr: 'المستخدمون',
    username: "Youssef Nabil",
    usernameAr: 'يوسف نبيل',
    email: "example@email.com",
    company: "Taxs",
    companyAr: 'ضرائب',
    date: "25-07-2023",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "05",
    title: 'Users',
    titleAr: 'المستخدمون',
    username: "Fatma Abeed",
    usernameAr: 'فاطمة عبيد',
    email: "example@email.com",
    company: "Taxs",
    companyAr: 'ضرائب',
    date: "15-03-2023",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "06",
    title: 'Users',
    titleAr: 'المستخدمون',
    username: "Ahmed Tawfik",
    usernameAr: 'أحمد توفيق',
    email: "example@email.com",
    company: "Taxs",
    companyAr: 'ضرائب',
    date: "01-01-2023",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
];


export const UserSidebarData = [
  {
    id: 31,
    title: 'Papers',
    titleAr: 'الأوراق',
    path: ['/personalpapersuser', '/companypapersuser'],
    data: ['Personal Papers', 'Company Papers'],
    dataAr: ['الأوراق الشخصية', 'الأوراق الشركة'],
  },
  {
    id: 32,
    title: 'Services',
    titleAr: 'الخدمات',
    path: ['/addnewserviesuser', '/servicesuserdashboard', '/servicesuserdashboard'],
    data: ['Request New Service', 'Ongoing', 'All Services'],
    dataAr: ['طلب خدمة جديدة', 'جارٍ', 'كل الخدمات'],
  },
  {
    id: 33,
    title: 'Settings',
    titleAr: 'الإعدادات',
    path: ['/settingsdashboard'],
    data: [],
    dataAr: [],
  },
];

export const ContactsFormData = [
  {
    id: 41,
    title: 'Name',
    titleAr: 'الاسم',
    type: 'text',
    placeholder: 'Full Name',
    placeholderAr: 'الاسم الكامل',
    required: true,
  },
  {
    id: 42,
    title: 'Title',
    titleAr: 'العنوان',
    type: 'text',
    placeholder: 'Job Title',
    placeholderAr: 'المسمى الوظيفي',
    required: false,
  },
  {
    id: 43,
    title: 'Email',
    titleAr: 'البريد الإلكتروني',
    type: 'email',
    placeholder: 'example@gmail.com',
    placeholderAr: 'مثال@gmail.com',
    required: true,
  },
  {
    id: 44,
    title: 'Subject',
    titleAr: 'الموضوع',
    type: 'text',
    placeholder: 'About Subject',
    placeholderAr: 'حول الموضوع',
    required: false,
  },
  {
    id: 45,
    title: 'Message',
    titleAr: 'الرسالة',
    type: 'textarea',
    placeholder: 'Enter Your Message Here',
    placeholderAr: 'أدخل رسالتك هنا',
    required: false,
  },
];


export const ContactsInfoData = [
  {
    id: 51,
    title: 'Phone',
    titleAr: 'الهاتف',
    description: '020225254487',
    descriptionAr: '020225254487',
    icon: <FaPhoneAlt size={40} />,
  },
  {
    id: 52,
    title: 'Email',
    titleAr: 'البريد الإلكتروني',
    description: 'info@kbs.com.eg',
    descriptionAr: 'info@kbs.com.eg',
    icon: <MdEmail size={40} />,
  },
  {
    id: 53,
    title: 'Office',
    titleAr: 'المكتب',
    type: 'text',
    description: 'Headquarter: 30 Misr Helwan Road, Maadi .Egypt Branch: Greek Campus office106 El Tahrir Square.',
    descriptionAr: 'المقر: 30 شارع مصر حلوان ، المعادي. الفرع: الحرم الجامعي اليوناني المكتب 106 ميدان التحرير.',
    icon: <RiHomeOfficeFill size={40} />,
  },
];


export const BlogData = [
  {
    id: '01',
    title: 'consectetur ipsum dolor sit amet Lorem',
    titleAr: 'ترتيب النص البديل للنص',
    blog: 'Esraa Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu',
    blogAr: 'إسراء لوريم إيبسوم دولور سيت أميت، كونسيكتيتور الآدبية، سيد العمل الجدير بالاهتمام الوقتية المترتبة على العمل والحزن الأساسي. كلام فارغ وخالٍ من المعاناة. لا يمكن اعتبار أي حدث جدير بالاهتمام. بالتالي، يجب أن تُسَمَّى كل الأحداث الهامة بلا معنى أو هدف',
    img: BlogsFeatured
  },
  {
    id: '02',
    title: 'dolor sit amet Lorem ipsum',
    titleAr: 'ألم سيت أميت النص البديل للنص',
    blog: 'Mahmoud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu',
    blogAr: 'محمود لوريم إيبسوم دولور سيت أميت، كونسيكتيتور الآدبية، سيد العمل الجدير بالاهتمام الوقتية المترتبة على العمل والحزن الأساسي. كلام فارغ وخالٍ من المعاناة. لا يمكن اعتبار أي حدث جدير بالاهتمام. بالتالي، يجب أن تُسَمَّى كل الأحداث الهامة بلا معنى أو هدف',
    img: BlogsFeatured
  },
  {
    id: '03',
    title: 'sit amet Lorem ipsum dolor',
    titleAr: 'الجلوس سيت أميت النص البديل للنص',
    blog: 'Esmat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu',
    blogAr: 'إسماعيل لوريم إيبسوم دولور سيت أميت، كونسيكتيتور الآدبية، سيد العمل الجدير بالاهتمام الوقتية المترتبة على العمل والحزن الأساسي. كلام فارغ وخالٍ من المعاناة. لا يمكن اعتبار أي حدث جدير بالاهتمام. بالتالي، يجب أن تُسَمَّى كل الأحداث الهامة بلا معنى أو هدف',
    img: BlogsFeatured
  },
  {
    id: '04',
    title: 'amet Lorem ipsum dolor sit',
    titleAr: 'أميت سيت أميت النص البديل للنص',
    blog: 'Hanafy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu',
    blogAr: 'هانافي لوريم إيبسوم دولور سيت أميت، كونسيكتيتور الآدبية، سيد العمل الجدير بالاهتمام الوقتية المترتبة على العمل والحزن الأساسي. كلام فارغ وخالٍ من المعاناة. لا يمكن اعتبار أي حدث جدير بالاهتمام. بالتالي، يجب أن تُسَمَّى كل الأحداث الهامة بلا معنى أو هدف',
    img: BlogsFeatured
  },
  {
    id: '05',
    title: 'Lorem ipsum dolor sit amet',
    titleAr: 'لوريم إيبسوم دولور سيت أميت النص البديل للنص',
    blog: 'Mahmoud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu',
    blogAr: 'محمود لوريم إيبسوم دولور سيت أميت، كونسيكتيتور الآدبية، سيد العمل الجدير بالاهتمام الوقتية المترتبة على العمل والحزن الأساسي. كلام فارغ وخالٍ من المعاناة. لا يمكن اعتبار أي حدث جدير بالاهتمام. بالتالي، يجب أن تُسَمَّى كل الأحداث الهامة بلا معنى أو هدف',
    img: BlogsFeatured
  },
  {
    id: '06',
    title: 'Lorem ipsum dolor sit amet',
    titleAr: 'لوريم إيبسوم دولور سيت أميت النص البديل للنص',
    blog: 'Mahmoud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu',
    blogAr: 'محمود لوريم إيبسوم دولور سيت أميت، كونسيكتيتور الآدبية، سيد العمل الجدير بالاهتمام الوقتية المترتبة على العمل والحزن الأساسي. كلام فارغ وخالٍ من المعاناة. لا يمكن اعتبار أي حدث جدير بالاهتمام. بالتالي، يجب أن تُسَمَّى كل الأحداث الهامة بلا معنى أو هدف',
    img: BlogsFeatured
  }
]

export const ServicesDataHeaderUserDashboard = [
  {
    id: 99,
    title: '',
    titleAr: ''
  },
  {
    id: 100,
    title: '#',
    titleAr: ''
  },
  {
    id: 101,
    title: '',
    titleAr: ''
  },
  {
    id: 102,
    title: 'Service',
    titleAr: 'الخدمة'
  },
  {
    id: 103,
    title: 'Serial-code',
    titleAr: 'الكود التسلسلي'
  },
  {
    id: 104,
    title: 'last update',
    titleAr: 'اخر تحديث'
  },
  {
    id: 105,
    title: 'Date',
    titleAr: 'التاريخ'
  },
  {
    id: 96,
    title: 'Actions',
    titleAr: 'الإجراءات'
  },
];
export const ServicesDataUserDashboard = [
  {
    id: "01",
    service: "VAT",
    servicesAr: 'ضريبة القيمة المضافة',
    SerialCode: "#123-456ABC",
    lastUpdate: "10-01-2025",
    date: "10-01-2025",
    actionAdd: 'Add',
    actionAddAr: 'إضافة',
    actionAr: 'تفاصيل',
    action: 'details'

  },
  {
    id: "02",
    service: "withhold tax",
    servicesAr: 'ضريبة الاستقطاع',
    SerialCode: "#123-456ABV",
    lastUpdate: "11-02-2025",
    date: "11-02-2025",
    actionAr: 'مكتمل',
    action: "completed",
    actionAdd: 'Add',
    actionAddAr: 'إضافة',
  },
  {
    id: "03",
    service: "payroll tax",
    servicesAr: 'ضريبة المرتبات',
    SerialCode: "#123-456ABV",
    lastUpdate: "08-04-2025",
    date: "08-04-2025",
    actionAdd: 'Add',
    actionAddAr: 'إضافة',
    actionAr: 'تفاصيل',
    action: 'details'


  },
  {
    id: "04",
    service: "annual income",
    servicesAr: 'الدخل السنوي',
    SerialCode: "#123-456ABC",
    lastUpdate: "05-06-2025",
    date: "05-06-2025",
    actionAr: 'مكتمل',
    action: "completed",
    actionAdd: 'Add',
    actionAddAr: 'إضافة',

  },
  {
    id: "05",
    service: "annual balance",
    servicesAr: 'الرصيد السنوي',
    SerialCode: "#123-456ABC",
    lastUpdate: "09-08-2025",
    date: "09-08-2025",
    actionAdd: 'Add',
    actionAddAr: 'إضافة',
    actionAr: 'تفاصيل',
    action: 'details'


  },
  {
    id: "06",
    service: "withhold tax",
    servicesAr: 'ضريبة الاستقطاع',
    SerialCode: "#123-456ABV",
    lastUpdate: "07-10-2025",
    date: "07-10-2025",
    actionAr: 'مكتمل',
    action: "completed",
    actionAdd: 'Add',
    actionAddAr: 'إضافة',

  },
  {
    id: "07",
    service: "payroll tax",
    servicesAr: 'ضريبة المرتبات',
    SerialCode: "#123-456ABV",
    lastUpdate: "12-12-2025",
    date: "12-12-2025",
    actionAdd: 'Add',
    actionAddAr: 'إضافة',
    actionAr: 'تفاصيل',
    action: 'details'


  },
];

export const PersonalPapersHeader = [
  {
    id: 119,
    title: '',
  },
  {
    id: 120,
    title: '#',
  },
  {
    id: 121,
    title: '',
  },
  {
    id: 122,
    title: 'document',
    titleAr: 'المستند'
  },
  {
    id: 123,
    title: 'status',
    titleAr: 'الحالة'
  },
  {
    id: 124,
    title: 'upload date',
    titleAr: 'تاريخ الرفع'
  },
  {
    id: 125,
    title: 'last modified',
    titleAr: 'آخر تعديل'
  },
  {
    id: 126,
    title: 'Actions',
    titleAr: 'الإجراءات'
  },
];


export const PapersData = [
  {
    id: "61",
    document: "VAT",
    documentAr: 'ضريبة القيمة المضافة',
    status: "valid",
    statusAr: 'صالح',
    uploadDate: "12-12-2024",
    date: "12-12-2024",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "62",
    document: "withhold tax",
    documentAr: 'ضريبة الاستقطاع',
    status: "not valid",
    statusAr: 'غير صالح',
    uploadDate: "13-12-2024",
    date: "13-12-2024",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "63",
    document: "payroll tax",
    documentAr: 'ضريبة المرتبات',
    status: "not valid",
    statusAr: 'غير صالح',
    uploadDate: "14-12-2024",
    date: "14-12-2024",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "64",
    document: "annual income",
    documentAr: 'الدخل السنوي',
    status: "valid",
    statusAr: 'صالح',
    uploadDate: "15-12-2024",
    date: "15-12-2024",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  },
  {
    id: "65",
    document: "annual balance",
    documentAr: 'الرصيد السنوي',
    status: "valid",
    statusAr: 'صالح',
    uploadDate: "16-12-2024",
    date: "16-12-2024",
    action: ["Edit", "Delete"],
    actionAr: ['تحرير', 'حذف']
  }
];

