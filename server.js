import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: '服务正常' })
})

// 占位对话接口（后面再接模型 API）
app.post('/api/chat', async (req, res) => {
  const { message } = req.body
  res.json({
    reply: `昭昭收到了：「${message}」。模型接口还没接上，下一步就来。`
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
