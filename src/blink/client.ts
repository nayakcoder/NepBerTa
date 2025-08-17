import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'nepali-ai-platform-rza9bzyv',
  authRequired: false // Allow public access for demo purposes
})

export default blink
