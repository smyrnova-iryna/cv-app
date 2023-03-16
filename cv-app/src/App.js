import React, {useState} from 'react';
import SkillsBlock from './components/SkillsBlock';
import Contacts from './components/Contacts';
import Photo from './components/Photo';
import MainInfo from './components/MainInfo';
import Languages from './components/Languages'
import Courses from './components/Courses';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './styles/App.css'
import Links from './components/Links';

const enCVInfo = {
  contacts: {
    title: 'Contact information',
    phone: {title: 'Phone: ', number: '+38(067)646-13-93'},
    email: {title: 'Email: ', email: 'iryna.smyrnova12@gmail.com'}
  },
  hardSkills: {
    title: 'Hard skills',
    skillsList: ['HTML', 'CSS', 'JavaScript', 'React', 'GIT'],
  },
  softSkills: {
    title: 'Soft skills',
    skillsList: ['Teamwork', 'Time management', 'Critical thinking', 'Communication', 'Creativity', 'Learnability'],
  },
  mainInfo: {
    name: 'Iryna Smyrnova',
    position: 'Trainee/Junior Front-end Developer',
    information: 'I have practical experience of implementing projects on React according to the principles of adaptive layout (to demonstrate experience, this resume is written on React). Since February 2023, I have been working on a project to write the corporate website of the Lithuanian company Ferrometals.'
  },
  languages: {
    title: 'Languages',
    languagesList: [{title: 'Ukrainian', level: 'native'}, {title: 'English', level: 'B2'}, {title: 'German', level: 'A1'}]
  },
  courses: {
    title: 'Courses',
    coursesList: [{title: 'React Online Marathon in Softserve IT Academy', startDate: '10.2022', finishDate: '12.2022'}, 
    {title: 'HTML5/CSS3/JavaScript Fundamentals course in Softserve IT Academy', startDate: '09.2022 ', finishDate: '10.2022'}]
  },
  extraCourses: {
    title: 'Additional courses',
      coursesList: [
        {title: 'Python Pro in Hillel IT School', startDate: '02.2022', finishDate: '06.2022', 
        checkCert: <a className='mainPageLink' href='https://certificate.ithillel.ua/view/73826253?utm_source=mailgun&utm_medium=email&utm_campaign=certificateNotification'>
          View certificate</a>}, 
        {title: 'Python Introduction in Hillel IT School', startDate: '10.2021 ', finishDate: '01.2022', 
        checkCert: <a className='mainPageLink' href='https://certificate.ithillel.ua/view/69667245?utm_source=mailgun&utm_medium=email&utm_campaign=certificateNotification'>
        View certificate</a>}]
  },
  education: {
    title: 'Education',
    univercity: 'Oles Honchar Dnipro National University',
    specialty: 'Marketing',
    startDate: '2018',
    finishDate: '2022'
  },
  projects: {
    title: 'Projects',
    projectsList: [{description: 'Ferrometals company website', technologies: 'React, MaterialUI', url: '(Development in progress)'},
    {description: 'Contact-us form', technologies: 'React, Styled components', url: 'https://smyrnova-iryna.github.io/contact-us-form'}, 
    {description: 'CV project', technologies: 'React', url: 'https://smyrnova-iryna.github.io/cv-app'},
    {description: 'Furniture company website template', technologies: 'HTML, CSS', url: 'https://smyrnova-iryna.github.io/furniture'},]
  },
  certificates: {
    buttonShowText: 'View certificates',
    linkText: 'Click to verify'
  },
  experience: {
    title: 'Experience',
    company: 'in Ferrometals',
    position: 'Junior React Developer',
    description: 'Was responsible for developing and designing of company`s corporate website',
    startDate: '02.2023',
    finishDate: 'up to now'
  },
  links: {
    gh: {
      title: 'Github',
      link: 'https://github.com/smyrnova-iryna'
    },
    linkedIn: {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/iryna-smyrnova-74461a261/'
    }
  }
};

const ukrCVInfo = {
  contacts: {
    title: 'Контактна інформація',
    phone: { title: 'Телефон: ', number: '+38(067)646-13-93'},
    email: {title: 'Електронна пошта: ', email: 'iryna.smyrnova12@gmail.com'}
  },
  hardSkills: {
    title: 'Хард-скілс',
    skillsList: ['HTML', 'CSS', 'JavaScript', 'React', 'GIT'],
  },
  softSkills: {
    title: 'Софт-скілс',
    skillsList: ['Командна робота', 'Управління часом', 'Критичне мислення', 'Комунікабельність', 'Креативність', 'Здібність до навчання', 'Увага до деталей'],
  },
  mainInfo: {
    name: 'Ірина Смирнова',
    position: 'Трейні/Джуніор Фронт-енд розробник',
    information: 'Маю практичний досвід реалізації проектів на React за принципами адаптивної верстки (для демонстрації досвіду це резюме написане на React). З лютого 2023 року виконую проект з написання корпоративного сайту литовського підприємства Ferrometals.'
  },
  languages: {
    title: 'Мови',
    languagesList: [{title: 'Українська', level: 'носій'}, {title: 'Англійська', level: 'B2'}, {title: 'Німецька', level: 'A1'}]
  },
  courses: {
    title: 'Курси',
    coursesList: [{title: 'React Онлайн Марафон у Softserve IT Академії', startDate: '10.2022', finishDate: '12.2022'}, 
    {title: 'HTML5/CSS3/JavaScript Fundamentals курс у Softserve IT Академії', startDate: '09.2022 ', finishDate: '10.2022'}]
  },
  extraCourses: {
    title: 'Додаткові курси',
    coursesList: [
      {title: 'Python Pro у Hillel IT School', startDate: '02.2022', finishDate: '06.2022', 
      checkCert: <a className='mainPageLink' href='https://certificate.ithillel.ua/view/73826253?utm_source=mailgun&utm_medium=email&utm_campaign=certificateNotification'>
      Переглянути сертифікат</a>}, 
      {title: 'Python Introduction у Hillel IT School', startDate: '10.2021 ', finishDate: '01.2022', 
      checkCert: <a className='mainPageLink' href='https://certificate.ithillel.ua/view/69667245?utm_source=mailgun&utm_medium=email&utm_campaign=certificateNotification'>
      Переглянути сертифікат</a>}]
  },
  education: {
    title: 'Освіта',
    univercity: 'Дніпровський національний університет імені Олеся Гончара',
    specialty: 'Маркетинг',
    startDate: '2018',
    finishDate: '2022'
  },
  projects: {
    title: 'Проєкти',
    projectsList: [{description: 'Вебсайт компанії Ferrometals', technologies: 'React, MaterialUI', url: '(В процесі розробки)'},
    {description: `Форма зворотнього зв'язку`, technologies: 'React, Styled components', url: 'https://smyrnova-iryna.github.io/contact-us-form/ '}, 
    {description: 'Резюме', technologies: 'React', url: 'https://smyrnova-iryna.github.io/cv-app'},
    {description: 'Шаблон вебсайту для меблевої компанії', technologies: 'HTML, CSS', url: 'https://smyrnova-iryna.github.io/furniture'}]
  },
  certificates: {
    buttonShowText: 'Переглянути сертифікати',
    linkText: 'Натисніть для перевірки'
  },
  experience: {
    title: 'Досвід роботи',
    company: 'у Ferrometals',
    position: 'Junior React Developer',
    description: 'Відповідала за розробку та дизайн корпоративного сайту компанії',
    startDate: '02.2023',
    finishDate: 'по теперішній момент'
  },
  links: {
    gh: {
      title: 'Github',
      link: 'https://github.com/smyrnova-iryna'
    },
    linkedIn: {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/iryna-smyrnova-74461a261/'
    }
  }
};

function App() {
  const [cvArr, setCvArr] = useState(enCVInfo);
  const [enButtonText, setEnButtonText] = useState('EN');
  const [ukrButtonText, setUkrButtonText] = useState('UKR');
  const setEnLanguage = () => {
      setCvArr(enCVInfo);
      setEnButtonText('EN');
      setUkrButtonText('UKR');
  };
  const setUkrLanguage = () => {
    setCvArr(ukrCVInfo);
    setEnButtonText('АНГЛ');
    setUkrButtonText('УКР');
};
  return (
    <>
    <div className='header'>
        <div className='headerButtonGroup'>
          <button className='headerLanguageButton' onClick={setEnLanguage}><span className='headerbuttonText'>{enButtonText}</span></button>
          <button className='headerLanguageButton' onClick={setUkrLanguage}><span className='headerbuttonText'>{ukrButtonText}</span></button>
        </div>
        <Links gh={cvArr.links.gh} linkedIn={cvArr.links.linkedIn} />
      </div>
    <div className='mainContainer'>
      <div className='sideBar'>
        <Photo />
        <div className='sideBarSkillsContainer'>
          <Contacts title={cvArr.contacts.title} phoneTitle={cvArr.contacts.phone.title} emailTitle={cvArr.contacts.email.title} 
          phoneNumber={cvArr.contacts.phone.number} email={cvArr.contacts.email.email} />
          <SkillsBlock type={cvArr.hardSkills.title} skillsList={cvArr.hardSkills.skillsList} />
          <SkillsBlock type={cvArr.softSkills.title} skillsList={cvArr.softSkills.skillsList} />
        </div>
      </div>
      <div className='mainPage'>
        <MainInfo name={cvArr.mainInfo.name} position={cvArr.mainInfo.position} information={cvArr.mainInfo.information} />
        <Experience title={cvArr.experience.title} position={cvArr.experience.position} company={cvArr.experience.company} description={cvArr.experience.description} startDate={cvArr.experience.startDate} finishDate={cvArr.experience.finishDate} />
        <Projects title={cvArr.projects.title} projectsList={cvArr.projects.projectsList}/>
        <Languages title={cvArr.languages.title} languagesList={cvArr.languages.languagesList} />
        <Courses title={cvArr.courses.title} coursesList={cvArr.courses.coursesList}/>
        <Certificates buttonShowText={cvArr.certificates.buttonShowText} linkText={cvArr.certificates.linkText} />
        <Courses title={cvArr.extraCourses.title} coursesList={cvArr.extraCourses.coursesList}/>
        <Education title={cvArr.education.title} univercity={cvArr.education.univercity} specialty={cvArr.education.specialty} 
        startDate={cvArr.education.startDate} finishDate={cvArr.education.finishDate} />
      </div>
    </div>
    </>
  );
}

export default App;

