import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";


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
    data: ['All Users', 'Add New'],
    dataAr: ['جميع المستخدمين', ' إضافة جديد'],
  },
  {
    id: 22,
    title: 'Blogs',
    titleAr: 'المدونات',
    data: ['All Blogs', 'Add New'],
    dataAr: ['جميع المدونات', ' إضافة جديد'],
  },
  {
    id: 23,
    title: 'Services',
    titleAr: 'الخدمات',
    data: ['Unread', 'Ongoing', 'All Services'],
    dataAr: ['غير مقروء', ' جاري', 'جميع الخدمات'],
  },
  {
    id: 24,
    title: 'Settings',
    titleAr: 'الإعدادات',
    data: [],
    dataAr: [],
  },
];


export const UserSidebarData = [
  {
    id: 31,
    title: 'Papers',
    titleAr: 'الأوراق',
    data: ['Personal Papers', 'Company Papers'],
    dataAr: ['الأوراق الشخصية', 'الأوراق الشركة'],
  },
  {
    id: 32,
    title: 'Services',
    titleAr: 'الخدمات',
    data: ['Request New Service', 'Ongoing', 'All Services'],
    dataAr: ['طلب خدمة جديدة', 'جارٍ', 'كل الخدمات'],
  },
  {
    id: 33,
    title: 'Settings',
    titleAr: 'الإعدادات',
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


export const CompanyData = [
  {
    "id": "01",
    "document": "VAT",
    "status": "valid",
    "uploadDate": "12-12-2024",
    "lastModified": "12-12-2024",

  },
  {
    "id": "02",
    "document": "withhold tax",
    "status": "not valid",
    "uploadDate": "12-12-2024",
    "lastModified": "12-12-2024",

  },
  {
    "id": "03",
    "document": "payroll tax",
    "status": "not valid",
    "uploadDate": "12-12-2024",
    "lastModified": "12-12-2024",

  },
  {
    "id": "04",
    "document": "annual income",
    "status": "valid",
    "uploadDate": "12-12-2024",
    "lastModified": "12-12-2024",

  },
  {
    "id": "05",
    "document": "annual balance",
    "status": "valid",
    "uploadDate": "12-12-2024",
    "lastModified": "12-12-2024",

  }
];

export const ServicesData = [
  {
    "id": "01",
    "service": "VAT",
    "SerialCode": "#123-456ABC",
    "uploadDate": "12-12-2024",
    "date": "12-12-2024",
    "action": "add milestone"

  },
  {
    "id": "02",
    "service": "withhold tax",
    "SerialCode": "#123-456ABV",
    "uploadDate": "12-12-2024",
    "date": "12-12-2024",
    "action": "completed"

  },
  {
    "id": "03",
    "service": "payroll tax",
    "SerialCode": "#123-456ABV",
    "uploadDate": "12-12-2024",
    "date": "12-12-2024",
    "action": "add milestone"

  },
  {
    "id": "04",
    "service": "annual income",
    "SerialCode": "#123-456ABC",
    "uploadDate": "12-12-2024",
    "date": "12-12-2024",
    "action": "completed"

  },
  {
    "id": "05",
    "service": "annual balance",
    "SerialCode": "#123-456ABC",
    "uploadDate": "12-12-2024",
    "date": "12-12-2024",
    "action": "add milestone"

  },
  {
    "id": "06",
    "service": "withhold tax",
    "SerialCode": "#123-456ABV",
    "uploadDate": "12-12-2024",
    "date": "12-12-2024",
    "action": "completed"

  },
  {
    "id": "07",
    "service": "payroll tax",
    "SerialCode": "#123-456ABV",
    "uploadDate": "12-12-2024",
    "date": "12-12-2024",
    "action": "add milestone"

  },
];

export const UsersData =[
  {"id" : "01" ,
  "username": "Esraa Esmat" ,
  "email": "example@email.com" ,
  "company": "Taxs" ,
  "date" : "12-12-2024" ,
  "action" :["Edit" , "Delete"]
  
},
  {"id" : "02" ,
  "username": "Doaa Mahmoud" ,
  "email": "example@email.com" ,
  "company": "Taxs" ,
  "date" : "12-12-2024" ,
  "action" :["Edit" , "Delete"]
  
},
  {"id" : "03" ,
  "username": "Ahmed Moharam" ,
  "email": "example@email.com" ,
  "company": "Taxs" ,
  "date" : "12-12-2024" ,
  "action" :["Edit" , "Delete"]
  
},
  {"id" : "04" ,
  "username": "Youssef Nabil" ,
  "email": "example@email.com" ,
  "company": "Taxs" ,
  "date" : "12-12-2024" ,
  "action" :["Edit" , "Delete"]
  
} ,
  {"id" : "05" ,
  "username": "Fatma Abeed" ,
  "email": "example@email.com" ,
  "company": "Taxs" ,
  "date" : "12-12-2024" ,
  "action" :["Edit" , "Delete"]
  
}  ,   
{"id" : "06" ,
"username": "Ahmed Tawfik" ,
"email": "example@email.com" ,
"company": "Taxs" ,
"date" : "12-12-2024" ,
"action" :["Edit" , "Delete"]

}, 
      ];