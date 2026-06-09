import { useState } from 'react'

const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Orzu Residences',
    category: 'Turar-joy majmuasi / Жилой комплекс',
    year: '2024',
    location: 'Toshkent, Oʻzbekiston',
    desc: 'Zamonaviy landshaft dizayni va premium fasad yechimlariga ega koʻp qavatli turar-joy majmuasi loyihasi.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/491451184_17943993794978279_2585254474048715154_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=108&ig_cache_key=MzYxMTkwMjAzMzA1NDUyMjIyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8pJL0sjM2l4Q7kNvwHJgwIn&_nc_oc=Adqt-tfnbTSewOLUfT7gywDGI8waRGZuE3KPeaXrdCkr38EIqHb4c-H-Dp2QMyGc7Ro&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=8Bxf-BgZUmye5AiT22pcPw&_nc_ss=7a22e&oh=00_Af-2hru4GBmzpYcWJRBye9I3V1vZbQNPDtv6DzrceFg6AA&oe=6A2D6CF0',
  },
  {
    id: 2,
    title: 'Silk Road Business Center',
    category: 'Tijorat va Biznes markazi / Коммерческий центр',
    year: '2024',
    location: 'Samarqand, Oʻzbekiston',
    desc: 'Milliy va zamonaviy arxitektura sintezini oʻzida mujassam etgan biznes va savdo majmuasi dizayni.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.82787-15/568355260_17965515920978279_2343404510296852763_n.jpg?stp=dst-jpg_e35_s640x640_sh2.08_tt6&_nc_cat=111&ig_cache_key=Mzc0OTI0NTUxNDM0OTYwNDg3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=fRPgT8JsPFUQ7kNvwFLanCj&_nc_oc=AdqnmT05fDNyyEGYJnnzN5R22siKLTZYEymVZDNWI7lxf0L9r8mNO4pjNJoj-lY-Gc4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=NvkAGSOMkV2xZrPzYzuR6g&_nc_ss=7a22e&oh=00_Af_BI3qYU0AwaqmI4rObsgo7Kilp0FWhpSMDaAwjH0tNdw&oe=6A2D563D',
  },
  {
    id: 3,
    title: 'Tashkent Cultural Hub',
    category: 'Jamoat majmuasi / Общественное пространство',
    year: '2023',
    location: 'Toshkent, Oʻzbekiston',
    desc: 'Keng koʻlamli madaniy tadbirlar, koʻrgazmalar va jamoat yigʻilishlari uchun moʻljallangan innovatsion markaz.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.82787-15/563608804_17964407807978279_7937257928735638397_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc0MTI3NjczMjMyMjc0OTMwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Gkv-D-jkvMcQ7kNvwE4ILhu&_nc_oc=Adpgv1zoqqP-bWv4lnjLHfbMTipfafy-hrgNL_LlAqp-p9v7FplvMd-fJl0Low815xg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=FxTQ08bRC_e0nSYMaSZZUQ&_nc_ss=7a22e&oh=00_Af_1D4N_7FfJC1ijwaTokt5KRAZXa0dO09E2OxGp2DbVZw&oe=6A2D82AB',
  },
  {
    id: 4,
    title: 'Green Valley Villas',
    category: 'Premium Villalar / Премиум Виллы',
    year: '2023',
    location: 'Boʻstonliq, Oʻzbekiston',
    desc: 'Tabiat qoʻynida joylashgan, minimalizm va hay-tek uslubidagi shinam shahar tashqarisi hovli-joy dizayni.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.82787-15/534584111_17957673659978279_6732457592830668238_n.jpg?stp=dst-jpg_e35_s640x640_sh2.08_tt6&_nc_cat=108&ig_cache_key=MzY5OTY5NzY4Mjk3NjYxNjU1OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=MqPNlOO6zdMQ7kNvwEtb_IJ&_nc_oc=AdowEUW72bAFXCGd06vDCIUxtDMIjVALFxSZX-YNo0fLGt_5O6gmQLpdMC7B_k3W354&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=FxTQ08bRC_e0nSYMaSZZUQ&_nc_ss=7a22e&oh=00_Af8TtCbhn05_SZGeWMUxEZlYexK7dvBJL0ERZkQmXqfdDg&oe=6A2D5478',
  },
  {
    id: 5,
    title: 'Mirzo Tower',
    category: 'Tijorat / Коммерческие',
    year: '2023',
    location: 'Toshkent, Oʻzbekiston',
    desc: 'Shahar markazidagi panoramali oynaband fasadga ega koʻp funksiyali osmonoʻpar bino loyihasi.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/503480318_17949548162978279_1060318447763529781_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=108&ig_cache_key=MzY0ODE5MzI2MDc2OTgxMzQ5Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=KgOgVop-RUQQ7kNvwHUzOJp&_nc_oc=AdrsAMnIoixucbtqS3k8zRuTHjBvE4Bn7gQ3h3lOvw83YeyJbxLCiwvo3C3B_lttQ6I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=IMOjXmou-kR0o4htSbtmDw&_nc_ss=7a22e&oh=00_Af-sJrNPOwplT5LUizRKwXPqp_4eRtx9v9MWVBOHsVcoJQ&oe=6A2D6B1F',
  },
  {
    id: 6,
    title: 'Heritage Museum Wing',
    category: 'Jamoat binosi / Общественное здание',
    year: '2022',
    location: 'Buxoro, Oʻzbekiston',
    desc: 'Tarixiy obidalar muhitiga moslashtirilgan muhtasham muzey majmuasining yangi zamonaviy korpusi.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/503076400_17949190433978279_5578975803270716362_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzY0NTI0NDU4NjAyODcxNDcxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=E1bCmDKm9GEQ7kNvwHTuXmi&_nc_oc=AdqcNUmw_TO3DmyOvfEQ83Jhv07zDxBpP-_ErXtGgpBWjE1U2yxMoySlmnVxxVgFzZ0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=IMOjXmou-kR0o4htSbtmDw&_nc_ss=7a22e&oh=00_Af-CT6YW03OEzB7DfcFRRaSHhiuhbVvoMKCev6eBEc3NWA&oe=6A2D5082',
  },
  {
    id: 7,
    title: 'Navruz Park Pavilion',
    category: 'Landshaft va Pavilon / Ландшафт и Павильон',
    year: '2022',
    location: 'Toshkent, Oʻzbekiston',
    desc: 'Istirohat bogʻi ichida joylashgan, dam oluvchilar uchun moʻljallangan yengil konstruksiyali eko-pavilon.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/480485800_17938157429978279_2625111886594292293_n.jpg?stp=dst-jpg_e35_s640x640_sh2.08_tt6&_nc_cat=109&ig_cache_key=MzU7NDU0MjUyNzA0Njk4NTkxOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=zFgFgdwhfegQ7kNvwHkfvBO&_nc_oc=AdqOWu5KhvptqKkOHGrJz8ZoAf18XSZBQ3cLC3nAtB-ujqvwrfQVsemvtDQ-uNHGyqw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=IMOjXmou-kR0o4htSbtmDw&_nc_ss=7a22e&oh=00_Af9FW47k6y5m7G-M_0B8nfnmgjRIWqh6gI5MP1nf1wBliA&oe=6A2D6B8F',
  },
  {
    id: 8,
    title: 'Azure Heights Apartments',
    category: 'Turar-joy / Жилые',
    year: '2022',
    location: 'Toshkent, Oʻzbekiston',
    desc: 'Minimalistik uslubda ishlangan, keng terrasali zamonaviy kvartiralar majmuasining tashqi koʻrinishi.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/474028430_17934635012978279_6736004954860582883_n.jpg?stp=dst-jpg_e35_s640x640_sh2.08_tt6&_nc_cat=106&ig_cache_key=MzU1Mjc2MzQ4MDQxNTg3ODg4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=d_myXytCF4EQ7kNvwFjuApm&_nc_oc=Adqy89SEyabcIUqFmbu5zaKrTKXbu_rqvctVqnxLc716YDoO0OSCeAhMciSKIpScHBM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=6FyCje9AQhf5LTdB8fcjxw&_nc_ss=7a22e&oh=00_Af81O2RQJd-AE46tHQMpMLvhxt1XZ6GaZ8B4yIjn8mvioQ&oe=6A2D5C76',
  },
  {
    id: 9,
    title: 'Fergana Valley Resort',
    category: 'Dam olish maskani / Зона отдыха',
    year: '2021',
    location: 'Fargʻona, Oʻzbekiston',
    desc: 'Fargʻona vodiysining tabiati va iqlimiga moslashtirilgan, basseyn va kottejlardan iborat eko-kurort loyihasi.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/472518466_17934627950978279_4452828410043850622_n.jpg?stp=dst-jpg_e35_s640x640_sh2.08_tt6&_nc_cat=108&ig_cache_key=MzU1MjczMDMwMzI5NTAxNzMxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=0w2V_-macXcQ7kNvwGOOb49&_nc_oc=Adpua64BS1EtD1Pt5M2YHqekzZNrOwnTIe1m--C9fqZNX0btxk8dNnOLycr_27P65fA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=6FyCje9AQhf5LTdB8fcjxw&_nc_ss=7a22e&oh=00_Af_yCfXVCtmQwmBUPmD4ar58jLgmrbEUmsAgvDtVfe9IQg&oe=6A2D75C3',
  },
  {
    id: 10,
    title: 'Innovation Tech Campus',
    category: 'IT Park va Ofis / IT Парк и Офис',
    year: '2021',
    location: 'Toshkent, Oʻzbekiston',
    desc: 'Texnologiyalar markazi uchun barcha qulayliklarga ega, aqlli bino (Smart Building) tizimidagi kampus.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/474365411_17934042002978279_7799389785548726960_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzY0OTAwMjgzMTg0ODA2NTQ3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=bzgZQ_arMjwQ7kNvwHGvhS2&_nc_oc=Adr_zU4F6fd06Mz1dIhpK6bKGF_LJJLVDLZ5pT8hPhlHkXViQ8J_cN91mbGbns-CnTU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=6FyCje9AQhf5LTdB8fcjxw&_nc_ss=7a22e&oh=00_Af9YJkmowBC6nLaAiH2MIQj3pv4ZJQnZri_AqKkDUFhAZg&oe=6A2D4FA6',
  },
  {
    id: 11,
    title: 'Alisher Navoi Library',
    category: 'Kutubxona va Oʻquv markazi / Библиотека',
    year: '2021',
    location: 'Toshkent, Oʻzbekiston',
    desc: 'Keng va yorugʻ oʻquv zallari, futuristik fasad yechimi hamda ulkan kitob javonlari konsepsiyasiga ega kutubxona.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/473807898_17933488673978279_9097882401490780890_n.jpg?stp=dst-jpg_e35_s640x640_sh2.08_tt6&_nc_cat=109&ig_cache_key=MzU0NTQ5MjE3ODY5Njk3MjMyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=LvonyPFmSLQQ7kNvwEmtRll&_nc_oc=AdopR7STzhDAL3tBPCb2FSCZ7hv_1htfqVuojHio31QXpukxc518a3SlXJBk0xWoB5s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=6FyCje9AQhf5LTdB8fcjxw&_nc_ss=7a22e&oh=00_Af_kYVGkt7pSM6CoblLBq983XEbbO2kak8RPDtUDcvGQdA&oe=6A2D82D9',
  },
  {
    id: 12,
    title: 'Sunset Boulevard Mall',
    category: 'Savdo-koʻngilochar markazi / ТРЦ',
    year: '2020',
    location: 'Toshkent, Oʻzbekiston',
    desc: 'Kechki yoritish tizimlari alohida ishlangan, zamonaviy brend doʻkonlari va koʻngilochar hududlarni oʻz ichiga olgan Mall.',
    img: 'https://instagram.ftas5-1.fna.fbcdn.net/v/t51.75761-15/471749694_17933059676978279_2618438063550863230_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=106&ig_cache_key=MzU0MzAzNTQ5NTUyMTQ4Njg2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=eUoQL_Me7d4Q7kNvwFDZhVr&_nc_oc=AdoZMnu16s9ggW_fRLZx6yOsApivocekZU_jkpWClXKWxn9tEXseH6xPd8Q9OaEZbg8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftas5-1.fna&_nc_gid=YsRlX6vUseH2DRpzu-ruDA&_nc_ss=7a22e&oh=00_Af81vzqZ3N8koykkNcdoOSybiTw5De_r9lvdMboGjbsd4A&oe=6A2D7B06',
  },
]

// ProjectCard komponentiga onImageClick funksiyasini qo'shdik
function ProjectCard({ project, onImageClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--card-bg, #1a1a1a)',
        border: '1px solid var(--card-border, #333)',
        cursor: 'pointer',
        animation: 'scaleIn 0.5s ease both',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onImageClick(project)} // Card bosilganda Modal ochiladi
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />
        {/* Overlay - "Ko'rish / Посмотреть" yozuvi bilan */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            color: '#fff', fontFamily: 'Montserrat', fontSize: '12px',
            fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
            border: '1px solid #fff', padding: '8px 16px', background: 'rgba(0,0,0,0.2)'
          }}>
            Koʻrish / View
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 24px 24px' }}>
        <div style={{
          fontFamily: 'Montserrat', fontSize: '11px', fontWeight: 700,
          letterSpacing: '3px', textTransform: 'uppercase',
          color: 'var(--text-secondary, #888)', marginBottom: '8px',
        }}>
          {project.year} • {project.location}
        </div>
        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '24px', letterSpacing: '1.5px',
          color: 'var(--text-primary, #fff)',
          margin: 0
        }}>
          {project.title}
        </h3>
        <div style={{
          fontFamily: 'Montserrat', fontSize: '12px',
          color: 'var(--text-secondary, #888)', marginTop: '4px',
        }}>
          {project.category}
        </div>
      </div>
    </div>
  )
}

export default function Projects({ t }) {
  const STEP = 4
  const [visibleCount, setVisibleCount] = useState(4)
  const [selectedProject, setSelectedProject] = useState(null) // Modal holati uchun state

  const visibleProjects = ALL_PROJECTS.slice(0, visibleCount)
  const allLoaded = visibleCount >= ALL_PROJECTS.length

  return (
    <section id="projects" style={{
      padding: '120px 48px',
      background: 'var(--bg, #0a0a0a)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{
            fontFamily: 'Montserrat', fontSize: '12px', fontWeight: 700,
            letterSpacing: '5px', textTransform: 'uppercase',
            color: 'var(--text-secondary, #888)', marginBottom: '16px',
          }}>
            ✦ {t?.projects?.label || 'PORTFOLIO'}
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(40px, 6vw, 72px)',
            letterSpacing: '3px',
            color: 'var(--text-primary, #fff)',
            margin: 0
          }}>
            {t?.projects?.title || 'ARCHITECTURAL PROJECTS'}
          </h2>
        </div>

        {/* Grid - 2 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          marginBottom: '56px',
        }}>
          {visibleProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Load more / Show less buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          {!allLoaded && (
            <button
              onClick={() => setVisibleCount(c => Math.min(c + STEP, ALL_PROJECTS.length))}
              style={{
                background: 'var(--btn-bg, #fff)',
                color: 'var(--btn-text, #000)',
                border: 'none',
                padding: '16px 48px',
                fontFamily: 'Montserrat',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseOver={e => e.currentTarget.style.opacity = '0.8'}
              onMouseOut={e => e.currentTarget.style.opacity = '1'}
            >
              {t?.projects?.loadMore || 'Yana yuklash'} ↓
            </button>
          )}

          {allLoaded && (
            <button
              onClick={() => setVisibleCount(4)}
              style={{
                background: 'transparent',
                color: 'var(--text-primary, #fff)',
                border: '2px solid var(--card-border, #333)',
                padding: '16px 48px',
                fontFamily: 'Montserrat',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = 'var(--text-primary, #fff)'}
              onMouseOut={e => e.currentTarget.style.borderColor = 'var(--card-border, #333)'}
            >
              {t?.projects?.showLess || 'Kamroq koʻrsatish'} ↑
            </button>
          )}
        </div>

        {/* Counter */}
        <div style={{
          textAlign: 'center', marginTop: '24px',
          fontFamily: 'Montserrat', fontSize: '13px',
          color: 'var(--text-secondary, #888)', letterSpacing: '1px',
        }}>
          {visibleCount} / {ALL_PROJECTS.length}
        </div>
      </div>

      {/* ─── MODAL / LIGHTBOX OYNASI ─── */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)} // Orqa fon bosilganda yopiladi
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999, display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: '20px',
            backdropFilter: 'blur(10px)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {/* Yopish tugmasi (X) */}
          <button
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'absolute', top: '24px', right: '32px',
              background: 'none', border: 'none', color: '#fff',
              fontSize: '36px', cursor: 'pointer', fontFamily: 'Montserrat'
            }}
          >
            &times;
          </button>

          {/* Modal kontenti */}
          <div
            onClick={(e) => e.stopPropagation()} // Rasm usti bosilganda modal yopilib ketmasligi uchun
            style={{
              maxWidth: '1000px', width: '100%', display: 'flex',
              flexDirection: 'column', gap: '20px', alignItems: 'center'
            }}
          >
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              style={{
                maxWidth: '100%', maxHeight: '70vh',
                objectFit: 'contain', border: '1px solid #222',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                animation: 'zoomIn 0.3s ease'
              }}
            />
            {/* Rasm haqida qo'shimcha ma'lumotlar */}
            <div style={{ textAlign: 'center', color: '#fff', maxWidth: '600px' }}>
              <span style={{
                fontFamily: 'Montserrat', fontSize: '11px', letterSpacing: '2px',
                color: '#888', textTransform: 'uppercase'
              }}>
                {selectedProject.year} • {selectedProject.location}
              </span>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px',
                letterSpacing: '1px', margin: '6px 0 12px 0'
              }}>
                {selectedProject.title}
              </h2>
              <p style={{
                fontFamily: 'Montserrat', fontSize: '14px', color: '#ccc',
                lineHeight: '1.6', margin: 0
              }}>
                {selectedProject.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animatsiyalar */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @media (max-width: 640px) {
          #projects > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}