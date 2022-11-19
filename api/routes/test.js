import { Router } from 'express'

const router = Router()

router.get('/test', (req, res) => {
  res.send('Data from express API')
})

router.get('/test-client', (req, res) => {
  res.send('Data from express API (fetched client-side)')
})

export default router
