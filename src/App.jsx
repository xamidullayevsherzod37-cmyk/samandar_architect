import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const translations = {
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Haqida',
      projects: 'Loyihalar',
      services: 'Xizmatlar',
      contact: 'Aloqa',
    },
    hero: {
      title: 'SAMANDAR',
      subtitle: 'ARCHITECT',
      tagline: 'Meʼmorchilik — bu muzeyga aylantirilgan xayol',
      cta: 'Loyihalarni koʻrish',
      ctaContact: 'Bogʻlanish',
    },
    about: {
      label: 'Haqimizda',
      title: 'Meʼmorchilik\nbilam hayot',
      text1: "10 yildan ortiq tajriba bilan biz zamonaviy va milliy meʼmorchilik anʼanalarini uyg'unlashtirgan noyob inshootlar yaratamiz. Har bir loyiha — bu yangi bir hikoya.",
      text2: "Bizning jamoamiz — ishqibozlar jamoasi. Har bir bino — bu faqat devor va tom emas, balki inson uchun yaratilgan hayot maydoni.",
      exp: 'Yillik tajriba',
      proj: 'Yakunlangan loyiha',
      award: 'Mukofot',
    },
    projects: {
      label: 'Loyihalar',
      title: 'Bizning ishlarimiz',
      loadMore: 'Yana koʻrish',
      showLess: 'Yashirish',
      categories: ['Barchasi', 'Turar-joy', 'Tijorat', 'Jamoat'],
    },
    services: {
      label: 'Xizmatlar',
      title: 'Nima qilamiz',
      items: [
        { title: 'Dizayn loyiha', desc: 'Kontseptsiyadan tortib to ishchi hujjatlargacha toʻliq loyihalash xizmati.' },
        { title: 'Interyer dizayn', desc: 'Ichki makonni estetik va funksional jihatdan shakllantirish.' },
        { title: 'Tiklanish', desc: 'Eski binolarni zamonaviy talablarga mos tarzda restavratsiya qilish.' },
        { title: "Maslahat xizmati", desc: "Qurilish va me'morchilik bo'yicha professional maslahat." },
      ],
    },
    contact: {
      label: 'Bogʻlanish',
      title: 'Loyihangizni\nboshlaylik',
      namePlaceholder: "Ismingiz",
      emailPlaceholder: "Email manzilingiz",
      msgPlaceholder: "Loyiha haqida qisqacha...",
      send: "Yuborish",
      address: "Toshkent, Oʻzbekiston",
      phone: "+998 90 123 45 67",
      email: "info@samandararchitect.uz",
    },
    footer: {
      copy: '© 2025 Samandar Architect. Barcha huquqlar himoyalangan.',
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      projects: 'Проекты',
      services: 'Услуги',
      contact: 'Контакты',
    },
    hero: {
      title: 'SAMANDAR',
      subtitle: 'ARCHITECT',
      tagline: 'Архитектура — это мечта, ставшая пространством',
      cta: 'Смотреть проекты',
      ctaContact: 'Связаться',
    },
    about: {
      label: 'О нас',
      title: 'Архитектура —\nэто жизнь',
      text1: "Более 10 лет опыта позволяют нам создавать уникальные здания, сочетающие современную и национальную архитектурную традицию. Каждый проект — это новая история.",
      text2: "Наша команда — это сообщество энтузиастов. Каждое здание — это не просто стены и крыша, это пространство жизни, созданное для человека.",
      exp: 'Лет опыта',
      proj: 'Завершённых проектов',
      award: 'Наград',
    },
    projects: {
      label: 'Проекты',
      title: 'Наши работы',
      loadMore: 'Показать ещё',
      showLess: 'Скрыть',
      categories: ['Все', 'Жилые', 'Коммерческие', 'Общественные'],
    },
    services: {
      label: 'Услуги',
      title: 'Что мы делаем',
      items: [
        { title: 'Проектирование', desc: 'Полный цикл проектирования от концепции до рабочей документации.' },
        { title: 'Интерьер', desc: 'Эстетичное и функциональное оформление внутреннего пространства.' },
        { title: 'Реконструкция', desc: 'Реставрация старых зданий в соответствии с современными требованиями.' },
        { title: 'Консультации', desc: 'Профессиональные консультации по строительству и архитектуре.' },
      ],
    },
    contact: {
      label: 'Контакты',
      title: 'Начнём ваш\nпроект',
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваш email",
      msgPlaceholder: "Кратко о проекте...",
      send: "Отправить",
      address: "Ташкент, Узбекистан",
      phone: "+998 90 123 45 67",
      email: "info@samandararchitect.uz",
    },
    footer: {
      copy: '© 2025 Samandar Architect. Все права защищены.',
    }
  }
}

export default function App() {
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('uz')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  const t = translations[lang]

  return (
    <div>
      <Navbar t={t} theme={theme} toggleTheme={toggleTheme} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Projects t={t} />
      <Services t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}
