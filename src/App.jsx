import React, { useEffect, useState } from 'react'

const translations = {
  es: {
    navHome: 'Inicio',
    navAbout: 'Nosotros',
    navContact: 'Contáctenos',
    langToggle: 'EN',
    headerTitle: 'Fenth AXM — Cambio de Divisas',
    updateRates: 'Actualizar tasas',
    source: 'Fuente: exchangerate.host · Última actualización:',
    converterTitle: 'Convertidor',
    amountLabel: 'Cantidad',
    fromLabel: 'Desde',
    toLabel: 'Hacia',
    allCurrencies: 'Todas las monedas y su valor en COP',
    filterByCurrency: 'Filtrar por código (ej: USD)',
    orderBtn: 'Orden:',
    currencyHeader: 'Moneda',
    copValueHeader: '1 unidad = COP',
    rateHeader: 'Tasa (base)',
    quickSearch: 'Buscador rápido',
    allCurrenciesBtn: 'Todas las monedas',
    loading: 'Cargando...',
    aboutTitle: 'Nosotros',
    whoWeAre: 'Quiénes somos',
    whoWeAreText: 'Somos una empresa familiar, empezando en el mercado cambiario legalmente autorizados para esta actividad según la resolución No. 1659 del 12 de Septiembre de 2017 emitida por la DIAN. Nuestra compañía se basa en la transparencia y seriedad de nuestras operaciones y el excelente servicio que ofrecemos.',
    mission: 'Misión',
    missionText: 'Fenth AXM es una empresa enfocada en prestar el mejor servicio de compra y venta de moneda extranjera. Nos esforzamos por brindar una atención personalizada a todos nuestros clientes, buscando superar sus expectativas y mantener una relación comercial a largo plazo.',
    vision: 'Visión',
    visionText: 'Ser una empresa líder del mercado cambiario a nivel del Quindio, manteniendo tasas competitivas y servicios que respondan a los intereses del mercado. Continuaremos basando nuestras operaciones en el cumplimiento de los deberes legales y generando confianza y seguridad en nuestros clientes.',
    contactTitle: 'Contáctenos',
    contactForm: 'Formulario de Contacto',
    nameLabel: 'Nombre',
    emailLabel: 'Correo',
    subjectLabel: 'Asunto',
    messageLabel: 'Mensaje',
    sendBtn: 'Enviar',
    businessHours: 'Horarios de Atención',
    weekdaysHours: 'Lunes a viernes: 8:00 AM - 8:00 PM',
    weekendHours: 'Sábados, domingos y festivos: 8:00 AM - 5:00 PM',
    communicate: 'Comunícate',
    phone: '3234590362',
    successMessage: 'Mensaje enviado correctamente. Nos contactaremos pronto.',
    errorMessage: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
    footerSocial: 'Síguenos en Instagram, WhatsApp y TikTok',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navContact: 'Contact Us',
    langToggle: 'ES',
    headerTitle: 'Fenth AXM — Currency Exchange',
    updateRates: 'Update rates',
    source: 'Source: Banco de la República · Last updated:',
    converterTitle: 'Converter',
    amountLabel: 'Amount',
    fromLabel: 'From',
    toLabel: 'To',
    allCurrencies: 'All currencies and their value in COP',
    filterByCurrency: 'Filter by code (e.g.: USD)',
    orderBtn: 'Order:',
    currencyHeader: 'Currency',
    copValueHeader: '1 unit = COP',
    rateHeader: 'Rate (base)',
    quickSearch: 'Quick search',
    allCurrenciesBtn: 'All currencies',
    loading: 'Loading...',
    aboutTitle: 'About Us',
    whoWeAre: 'Who We Are',
    whoWeAreText: 'We are a family company, legally authorized to operate in the foreign exchange market according to Resolution No. 1659 of September 12, 2017, issued by the DIAN (Colombian Tax and Customs Authority). Our company is built on the transparency and integrity of our operations and the excellent service we provide.',
    mission: 'Mission',
    missionText: 'Fenth AXM is a company focused on providing the best foreign currency exchange service. We strive to offer personalized attention to all our clients, seeking to exceed their expectations and maintain a long-term business relationship.',
    vision: 'Vision',
    visionText: 'To be a leading company in the foreign exchange market in the Quindio region, maintaining competitive rates and services that respond to market interests. We will continue to base our operations on compliance with legal duties and generating trust and security in our customers.',
    contactTitle: 'Contact Us',
    contactForm: 'Contact Form',
    nameLabel: 'Name',
    emailLabel: 'Email',
    subjectLabel: 'Subject',
    messageLabel: 'Message',
    sendBtn: 'Send',
    businessHours: 'Business Hours',
    weekdaysHours: 'Monday to Friday: 8:00 AM - 8:00 PM',
    weekendHours: 'Saturdays, Sundays, and holidays: 8:00 AM - 5:00 PM',
    communicate: 'Contact',
    phone: '3234590362',
    successMessage: 'Message sent successfully. We will contact you soon.',
    errorMessage: 'Error sending message. Please try again.',
    footerSocial: 'Follow us on Instagram, WhatsApp and TikTok',
  }
}

function SocialFooter({ lang }) {
  const t = translations[lang]

  return (
    <footer className="max-w-5xl mx-auto mt-8 px-4">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
        <a href="https://www.instagram.com/fenth_axm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-pink-600 transition">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
          </svg>
          <span>@fenth_axm</span>
        </a>
        <span className="hidden sm:inline">·</span>
        <a href="https://wa.me/573234590362" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-green-600 transition">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M12.04 2A10 10 0 0 0 2.16 13.2L2 22l8.9-2.34a10 10 0 1 0 1.14-17.66Zm0 18.2a8.2 8.2 0 0 1-4.18-1.16l-.3-.18-5.27 1.39 1.4-5.13-.2-.28a8.2 8.2 0 1 1 8.55 5.36Zm4.57-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8 1-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48a.92.92 0 0 0-.68.32 2.86 2.86 0 0 0-.9 2.16c0 1.27.92 2.5 1.05 2.67.13.17 1.81 2.77 4.39 3.88.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.48-.29Z" />
          </svg>
          <span>+57 323 459 0362</span>
        </a>
        <span className="hidden sm:inline">·</span>
        <a href="https://www.tiktok.com/@fenth_axm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-slate-800 transition">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M14.5 2h3.4a5.1 5.1 0 0 0 5.1 5.1v3.4a8.5 8.5 0 0 1-5.1-1.6v7.2a6.2 6.2 0 1 1-6.2-6.2c.3 0 .6 0 .9.1v3.4a2.8 2.8 0 1 0 2.8 2.8V2Z" />
          </svg>
          <span>@fenth_axm</span>
        </a>
      </div>
      <p className="mt-3 text-center text-sm text-gray-500">{t.footerSocial}</p>
    </footer>
  )
}

function Home({ lang }) {
  const t = translations[lang]
  const [rates, setRates] = useState({})
  const [base, setBase] = useState('USD') 
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('COP')
  const [amount, setAmount] = useState(1)
  const [loading, setLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [query, setQuery] = useState('')
  const [sortDesc, setSortDesc] = useState(true)
  const [showAll, setShowAll] = useState(false)

  // Estado para la tendencia
  const [trend, setTrend] = useState(null)

  const formatterCOP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 2 })
  const formatterRate = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 6 })

  const formatCOP = (v) => {
    if (v == null || Number.isNaN(Number(v))) return '—'
    const entero = Math.floor(Number(v))
    const entero2 = Math.round( entero + ( ( entero * 3.56 ) / 100 ) )
    return formatterCOP.format(entero2)
  }

  const formatNumber = (v) => {
    if (v == null || Number.isNaN(Number(v))) return '—'
    return new Intl.NumberFormat('es-CO', { maximumFractionDigits: 4 }).format(Number(v))
  }

  const formatRate = (v) => {
    if (v == null || Number.isNaN(Number(v))) return '—'
    return formatterRate.format(Number(v))
  }

  const formatCurrencyWithCode = (value, currencyCode) => {
    if (value == null || Number.isNaN(Number(value))) return '—'
    try {
      return new Intl.NumberFormat('es-CO', { style: 'currency', currency: currencyCode, maximumFractionDigits: 4 }).format(Number(value))
    } catch (e) {
      return formatNumber(value)
    }
  }

  async function fetchRates() {
    setLoading(true)
    try {
      const endpoints = [
        'https://api.exchangerate.host/latest?base=USD', 
        'https://open.er-api.com/v6/latest/USD'
      ]

      let data = null
      for (const url of endpoints) {
        try {
          const res = await fetch(url)
          if (!res.ok) continue
          data = await res.json()
          if (data?.rates) break
        } catch (err) {
          console.warn('Fallo al consultar tasa externa:', url, err)
        }
      }

      if (!data || !data.rates || Object.keys(data.rates).length === 0) {
        throw new Error('No se pudieron leer las tasas externas')
      }

      const ratesObj = { USD: 1, ...data.rates }
      const baseCode = data.base || 'USD'
      const updated = data.date || data.time_last_update_utc || null
      setRates(ratesObj)
      setBase(baseCode)
      setLastUpdated(updated)
    } catch (e) {
      console.error('Error fetching rates', e)
    } finally {
      setLoading(false)
    }
  }

  // --- Tendencia Histórica con AwesomeAPI (5 días) ---
  const fetchTrend = async (baseC, quoteC, days = 5) => {
    if (baseC === quoteC) {
      setTrend(null);
      return;
    }

    try {
      const url = `https://economia.awesomeapi.com.br/json/daily/${baseC}-${quoteC}/${days}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Moneda no soportada en AwesomeAPI');
      const data = await res.json();
      
      if (!Array.isArray(data) || data.length === 0) {
        setTrend(null);
        return;
      }

      const points = data
        .map(item => parseFloat(item.bid))
        .filter(v => v != null && !isNaN(v))
        .reverse();
      
      setTrend(points);
    } catch (e) {
      console.warn('Fallo tendencia directa, intentando inversa...', e);
      try {
        const fallbackUrl = `https://economia.awesomeapi.com.br/json/daily/${quoteC}-${baseC}/${days}`;
        const res = await fetch(fallbackUrl);
        if (!res.ok) throw new Error();
        const data = await res.json();
        
        if (Array.isArray(data) && data.length > 0) {
          const points = data
            .map(item => 1 / parseFloat(item.bid))
            .filter(v => v != null && !isNaN(v))
            .reverse();
          setTrend(points);
          return;
        }
      } catch (err) {
        console.warn('Fallo definitivo en la tendencia:', err);
      }
      setTrend(null);
    }
  }

  useEffect(() => {
    fetchRates()
    const intervalId = setInterval(() => fetchRates(), 60 * 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (Object.keys(rates).length > 0 && from && to && from !== to) {
      fetchTrend(from, to, 5);
    } else {
      setTrend(null);
    }
  }, [from, to, rates]);

  const convert = () => {
    if (!rates || !rates[from] || !rates[to]) return 0
    const resultado = (((amount * rates[to])  + ( ( (  amount * rates[to] ) * 3.56 ) / 100 )) / rates[from] * 100) / 100
    return parseInt(resultado, 10)
  }

  const availableCurrencies = () => Object.keys(rates)
  const copRate = rates['COP'] || null

  const allCurrenciesList = () => {
    const list = Object.keys(rates).map(code => {
      const rate = rates[code]
      const inCOP = copRate && rate ? (copRate / rate) : null
      return { code, rate, inCOP }
    }).filter(Boolean)
    
    const q = query.trim().toUpperCase()
    const filtered = q ? list.filter(i => i.code.includes(q)) : list
    
    filtered.sort((a, b) => {
      if (!a.inCOP || !b.inCOP) return 0
      return sortDesc ? b.inCOP - a.inCOP : a.inCOP - b.inCOP
    })
    return filtered
  }

  const displayList = showAll ? allCurrenciesList() : allCurrenciesList().slice(0, 12)

  const currencyToCountry = { USD: 'us', EUR: 'eu', GBP: 'gb', JPY: 'jp', AUD: 'au', CAD: 'ca', CHF: 'ch', CNY: 'cn', MXN: 'mx', COP: 'co', BRL: 'br', ARS: 'ar', CLP: 'cl', PEN: 'pe', UYU: 'uy', BOB: 'bo', PAB: 'pa', CRC: 'cr', DOP: 'do', ILS: 'il', INR: 'in', KRW: 'kr', SGD: 'sg', HKD: 'hk', NZD: 'nz', ZAR: 'za', NOK: 'no', SEK: 'se', DKK: 'dk', RUB: 'ru', TRY: 'tr', PLN: 'pl', HUF: 'hu', CZK: 'cz', RON: 'ro', THB: 'th', IDR: 'id', MYR: 'my', PHP: 'ph', VND: 'vn', SAR: 'sa', AED: 'ae', KWD: 'kw', QAR: 'qa', EGP: 'eg', NGN: 'ng', KES: 'ke' }

  const getFlagForCurrency = (code) => {
    const cc = currencyToCountry[code]
    if (cc) return { type: 'img', src: `https://flagcdn.com/24x18/${cc}.png`, alt: cc }
    const derived = code.slice(0, 2).toLowerCase()
    if (/^[a-z]{2}$/.test(derived)) return { type: 'img', src: `https://flagcdn.com/24x18/${derived}.png`, alt: derived }
    return { type: 'emoji', char: '🌐' }
  }

  const getFlagEmojiFromCountry = (cc) => {
    if (!cc || cc.length !== 2) return '🌐'
    try {
      const A = 0x1F1E6
      const chars = cc.toUpperCase().split('').map(c => String.fromCodePoint(A + c.charCodeAt(0) - 65))
      return chars.join('')
    } catch (e) {
      return '🌐'
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-white to-gray-100">
      <header className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">{t.headerTitle}</h1>
          <button onClick={() => fetchRates()} className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
            {loading ? t.loading : t.updateRates}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">{t.converterTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm text-gray-600">{t.amountLabel}</label>
              <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="mt-1 w-full p-2 border rounded focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">{t.fromLabel}</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="mt-1 w-full p-2 border rounded focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400">
                {Object.keys(rates).length === 0 ? <option>—</option> : availableCurrencies().map(cur => {
                  const f = getFlagForCurrency(cur)
                  const emoji = f.type === 'img' ? getFlagEmojiFromCountry((currencyToCountry[cur]||cur.slice(0,2)).toLowerCase()) : f.char
                  return <option key={cur} value={cur}>{`${emoji} ${cur}`}</option>
                })}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="block text-sm text-gray-600">{t.toLabel}</label>
                <select value={to} onChange={e => setTo(e.target.value)} className="mt-1 w-full p-2 border rounded focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400">
                  {Object.keys(rates).length === 0 ? <option>—</option> : availableCurrencies().map(cur => {
                    const f = getFlagForCurrency(cur)
                    const emoji = f.type === 'img' ? getFlagEmojiFromCountry((currencyToCountry[cur]||cur.slice(0,2)).toLowerCase()) : f.char
                    return <option key={cur} value={cur}>{`${emoji} ${cur}`}</option>
                  })}
                </select>
              </div>
              <button title="Invertir monedas" onClick={() => { const prevFrom = from; setFrom(to); setTo(prevFrom); }} className="mt-6 inline-flex items-center justify-center p-2.5 border rounded-lg bg-gray-50 hover:bg-gray-100 transition shadow-sm" aria-label="Invertir monedas">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500">{amount} {from} ≈</div>
              <div className="text-5xl font-extrabold leading-none text-indigo-950">{formatCurrencyWithCode(convert(), to)}</div>
              <div className="text-xs text-gray-400 mt-1">
                {t.source} {lastUpdated ? new Date(lastUpdated).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US') : '—'}
                <br/>* Incluye recargo operativo del 3.56%
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 p-4 bg-white rounded-lg shadow-inner border border-gray-100 min-w-[160px]">
              <div className="text-xs font-medium text-gray-500">Tendencia (5 días)</div>
              {trend && trend.length > 1 ? (
                <div className="flex items-center gap-2">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="inline-block">
                    {(() => {
                      const pts = trend;
                      const min = Math.min(...pts)
                      const max = Math.max(...pts)
                      
                      const paddingY = 4;
                      const drawingHeight = 40 - (paddingY * 2);
                      const norm = pts.map((v, i) => ({
                        x: (i / (pts.length - 1)) * 120,
                        y: 40 - paddingY - (((v - min) / (max - min || 1)) * drawingHeight)
                      }))
                      
                      const d = norm.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ')
                      const isUp = pts[pts.length - 1] >= pts[0];
                      const strokeColor = isUp ? "#16a34a" : "#dc2626";

                      const lastP = norm[norm.length - 1];

                      return (
                        <g>
                          <path d={d} fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                          <circle cx={lastP.x} cy={lastP.y} r="3" fill={strokeColor} stroke="white" strokeWidth="1"/>
                        </g>
                      )
                    })()}
                  </svg>
                  {trend[trend.length-1] >= trend[0] ? 
                    <span className="text-green-600 text-lg" title="Subió">▲</span> : 
                    <span className="text-red-600 text-lg" title="Bajó">▼</span>
                  }
                </div>
              ) : (
                <div className="flex items-center justify-center h-[40px] w-[120px] text-xs text-gray-400 bg-gray-100 rounded">
                  {from === to ? 'Misma moneda' : 'Sin datos'}
                </div>
              )}
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-800">{t.allCurrencies}</h3>
              <button onClick={() => setShowAll(s => !s)} className="text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition">
                {showAll ? 'Ver menos' : 'Ver todas'}
              </button>
            </div>
            
            <div className="mb-4 flex gap-2">
              <input placeholder={t.filterByCurrency} value={query} onChange={e => setQuery(e.target.value)} className="p-2 border rounded-lg flex-1 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300" />
              <button onClick={() => setSortDesc(s => !s)} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                {t.orderBtn} {sortDesc ? 'desc ▼' : 'asc ▲'}
              </button>
            </div>

            <div className="max-h-80 overflow-auto border rounded-xl shadow-inner bg-gray-50">
              <table className="min-w-full text-sm">
                <thead className="bg-white sticky top-0 shadow-sm z-10">
                  <tr>
                    <th className="text-left p-3 w-1/2 text-gray-600 font-medium">{t.currencyHeader}</th>
                    <th className="text-right p-3 w-1/2 text-gray-600 font-medium">{t.copValueHeader}*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {displayList.map(c => (
                    <tr key={c.code} className="bg-white hover:bg-indigo-50 cursor-pointer transition" onClick={() => { setFrom(c.code); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                      <td className="p-3 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          {(() => {
                            const f = getFlagForCurrency(c.code)
                            if (f.type === 'img') return <img src={f.src} alt={f.alt} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                            return <span className="text-lg">{f.char}</span>
                          })()}
                          <span>{c.code}</span>
                        </div>
                      </td>
                      <td className="p-3 text-right font-mono text-gray-700">{c.inCOP ? formatCOP(c.inCOP) : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <aside className="bg-white p-6 rounded-xl shadow self-start lg:sticky lg:top-24">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">{t.quickSearch}</h3>
          <div className="space-y-4">
            <input placeholder={t.filterByCurrency} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300" onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const q = e.target.value.trim().toUpperCase()
                if (q && rates[q]) {
                  setTo(q)
                  e.target.value = ''
                }
              }
            }} />
            <div>
              <h4 className="text-sm text-gray-500 mb-2">{t.allCurrenciesBtn} (Destino)</h4>
              <div className="grid grid-cols-3 gap-1.5 max-h-60 overflow-auto p-1 bg-gray-50 rounded-lg border shadow-inner">
                {Object.keys(rates).length === 0 ? (
                  <div className="text-gray-500 text-xs p-2 col-span-3 text-center">{t.loading}</div>
                ) : availableCurrencies().sort().map(k => (
                  <button key={k} onClick={() => setTo(k)} className={`text-center p-1.5 text-xs rounded-md transition font-medium ${to === k ? 'bg-indigo-600 text-white shadow' : 'bg-white hover:bg-indigo-50 text-gray-700 border hover:border-indigo-200'}`}>
                    {k}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>

      <div className="max-w-5xl mx-auto mt-12 border-t pt-8">
        <SocialFooter lang={lang} />        
      </div>
    </div>
  )
}

function About({ lang }) {
  const t = translations[lang]
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-white to-gray-100">
      <header className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold">{t.aboutTitle}</h1>
      </header>
      <main className="max-w-5xl mx-auto">
        <section className="bg-white p-8 rounded-xl shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-indigo-600 pl-6">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">{t.whoWeAre}</h2>
              <p className="text-gray-700 leading-relaxed text-justify">{t.whoWeAreText}</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">{t.mission}</h2>
              <p className="text-gray-700 leading-relaxed text-justify">{t.missionText}</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold text-green-600 mb-4">{t.vision}</h2>
              <p className="text-gray-700 leading-relaxed text-justify">{t.visionText}</p>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-5xl mx-auto mt-8">
        <SocialFooter lang={lang} />        
      </div>
    </div>
  )
}

function Contact({ lang }) {
  const t = translations[lang]
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // Usamos el endpoint que te dio Formspree
      const response = await fetch('https://formspree.io/f/xnjepqoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // Limpiamos el formulario y mostramos mensaje de éxito
        setFormData({ name: '', email: '', subject: '', message: '' })
        setMessage(t.successMessage)
      } else {
        const data = await response.json()
        setMessage(data.error || t.errorMessage)
      }
    } catch (error) {
      console.error('Error enviando a Formspree:', error)
      setMessage(t.errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-white to-gray-100">
      <header className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold">{t.contactTitle}</h1>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">{t.contactForm}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">{t.nameLabel}</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t.emailLabel}</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t.subjectLabel}</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="mt-1 w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t.messageLabel}</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="mt-1 w-full p-3 border rounded-lg" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              {loading ? t.loading : t.sendBtn}
            </button>
            {message && <div className={`p-4 rounded-lg text-center ${message.includes('correctamente') || message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message}</div>}
          </form>
        </section>

        <section className="space-y-6">
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">{t.businessHours}</h2>
            <p className="text-gray-700">{t.weekdaysHours}</p>
            <p className="text-gray-700">{t.weekendHours}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">{t.communicate}</h2>
            <div className="space-y-4">
              <a href="https://wa.me/573234590362" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 hover:bg-green-100 transition">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                  <path d="M12.04 2A10 10 0 0 0 2.16 13.2L2 22l8.9-2.34a10 10 0 1 0 1.14-17.66Zm0 18.2a8.2 8.2 0 0 1-4.18-1.16l-.3-.18-5.27 1.39 1.4-5.13-.2-.28a8.2 8.2 0 1 1 8.55 5.36Zm4.57-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8 1-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48a.92.92 0 0 0-.68.32 2.86 2.86 0 0 0-.9 2.16c0 1.27.92 2.5 1.05 2.67.13.17 1.81 2.77 4.39 3.88.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.48-.29Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-green-700 font-semibold">WhatsApp</span>
                  <span className="font-bold">{t.phone}</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-5xl mx-auto mt-8">
        <SocialFooter lang={lang} />        
      </div>
    </div>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [lang, setLang] = useState('es')
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-900 selection:bg-indigo-500 selection:text-white">
      <nav className="bg-[#1e1b4b] text-gray-100 shadow sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex space-x-2">
            <button onClick={() => setCurrentPage('home')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${currentPage === 'home' ? 'bg-indigo-600 text-white shadow' : 'text-gray-300 hover:text-white hover:bg-indigo-950/40'}`}>
              {t.navHome}
            </button>
            <button onClick={() => setCurrentPage('about')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${currentPage === 'about' ? 'bg-indigo-600 text-white shadow' : 'text-gray-300 hover:text-white hover:bg-indigo-950/40'}`}>
              {t.navAbout}
            </button>
            <button onClick={() => setCurrentPage('contact')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${currentPage === 'contact' ? 'bg-indigo-600 text-white shadow' : 'text-gray-300 hover:text-white hover:bg-indigo-950/40'}`}>
              {t.navContact}
            </button>
          </div>
          <button onClick={() => setLang(l => (l === 'es' ? 'en' : 'es'))} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded shadow transition">
            {t.langToggle}
          </button>
        </div>
      </nav>

      <div className="flex-grow">
        {currentPage === 'home' && <Home lang={lang} />}
        {currentPage === 'about' && <About lang={lang} />}
        {currentPage === 'contact' && <Contact lang={lang} />}
      </div>
    </div>
  )
}