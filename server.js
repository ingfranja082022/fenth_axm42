import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}))
app.use(express.json())

// Configurar transportador de email con Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Endpoint para recibir formulario de contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  // Validar datos
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' })
  }

  try {
    // Email al propietario
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'ing.franja1050@gmail.com',
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    // Email de confirmación al usuario
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmación: Hemos recibido tu mensaje - Fenth AXM',
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Estimado/a ${name},</p>
        <p>Recibimos tu mensaje correctamente. Nos pondremos en contacto lo más pronto posible.</p>
        <hr>
        <p><strong>Resumen de tu mensaje:</strong></p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Horarios de atención: Lunes-Viernes 8am-8pm | Sábados, Domingos y Festivos 8am-5pm</p>
        <p>Teléfono: 3234590362</p>
      `
    })

    res.json({ success: true, message: 'Correo enviado exitosamente' })
  } catch (error) {
    console.error('Error al enviar email:', error)
    res.status(500).json({ error: 'Error al enviar el correo. Por favor intenta más tarde.' })
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor de contacto ejecutándose en puerto ${PORT} en 0.0.0.0`)
})