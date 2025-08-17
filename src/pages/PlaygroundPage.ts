import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Textarea } from '../components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Separator } from '../components/ui/separator'
import { Play, Copy, Download, Loader2, Code, Zap } from 'lucide-react'
import { toast } from 'sonner'
import blink from '../blink/client'

const PlaygroundPage = () => {
  const [input, setInput] = useState('नमस्कार! तपाईं कस्तो हुनुहुन्छ?')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState('text-generation')
  const [selectedTask, setSelectedTask] = useState('chat')

  const models = [
    { id: 'text-generation', name: 'NepaliGPT', description: 'Text generation and chat' },
    { id: 'sentiment-analysis', name: 'NepBERTa Sentiment', description: 'Sentiment analysis for Nepali text' },
    { id: 'text-classification', name: 'NepBERTa Classifier', description: 'Text classification tasks' }
  ]

  const tasks = [
    { id: 'chat', name: 'Chat/Conversation', description: 'Interactive conversation' },
    { id: 'translate', name: 'Translation', description: 'English ↔ Nepali translation' },
    { id: 'sentiment', name: 'Sentiment Analysis', description: 'Analyze text sentiment' },
    { id: 'summarize', name: 'Summarization', description: 'Text summarization' }
  ]

  const examples = {
    chat: 'नमस्कार! तपाईं कस्तो हुनुहुन्छ?',
    translate: 'Hello, how are you today?',
    sentiment: 'यो फिल्म धेरै राम्रो थियो। मलाई धेरै मन पर्यो।',
    summarize: 'नेपाल दक्षिण एसियामा अवस्थित एक भूपरिवेष्टित देश हो। यसको उत्तरमा चीन र दक्षिण, पूर्व र पश्चिममा भारत छ।'
  }

  const handleRunAPI = async () => {
    if (!input.trim()) {
      toast.error('Please enter some text to analyze')
      return
    }

    setIsLoading(true)
    setOutput('')

    try {
      let prompt = ''
      
      switch (selectedTask) {
        case 'chat':
          prompt = `You are a helpful AI assistant that can communicate in both English and Nepali. Respond naturally to: "${input}"`
          break
        case 'translate':
          prompt = `Translate the following text between English and Nepali (detect the source language automatically): "${input}"`
          break
        case 'sentiment':
          prompt = `Analyze the sentiment of this Nepali text and provide the result in both English and Nepali: "${input}"`
          break
        case 'summarize':
          prompt = `Summarize the following Nepali text in both English and Nepali: "${input}"`
          break
        default:
          prompt = input
      }

      const response = await blink.ai.generateText({
        prompt,
        model: 'gpt-4o-mini',
        maxTokens: 300
      })

      setOutput(response.text)
      toast.success('API call completed successfully!')
    } catch (error) {
      console.error('API Error:', error)
      toast.error('API call failed. Please try again.')
      setOutput('Error: Failed to process the request. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(output)
    toast.success('Output copied to clipboard!')
  }

  const handleCopyCode = () => {
    const codeSnippet = `
// Using Nepali AI Platform API
import { createClient } from '@blinkdotnew/sdk'

const blink = createClient({
  projectId: 'nepali-ai-platform-rza9bzyv'
})

const response = await blink.ai.generateText({
  prompt: "${input}",
  model: "gpt-4o-mini",
  maxTokens: 300
})

console.log(response.text)
`
    navigator.clipboard.writeText(codeSnippet.trim())
    toast.success('Code snippet copied to clipboard!')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Code className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">API Playground</h1>
            <p className="text-muted-foreground">Test and experiment with Nepali AI models</p>
          </div>
          <Badge variant="secondary" className="ml-auto">
            <Zap className="h-3 w-3 mr-1" />
            Live Testing
          </Badge>
        </div>
        <Separator />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Select model and task type</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Model</label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {models.map((model) => (
                      <SelectItem key={model.id} value={model.id}>
                        <div>
                          <div className="font-medium">{model.name}</div>
                          <div className="text-xs text-muted-foreground">{model.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Task</label>
                <Select value={selectedTask} onValueChange={(value) => {
                  setSelectedTask(value)
                  setInput(examples[value as keyof typeof examples] || '')
                }}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tasks.map((task) => (
                      <SelectItem key={task.id} value={task.id}>
                        <div>
                          <div className="font-medium">{task.name}</div>
                          <div className="text-xs text-muted-foreground">{task.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
              <CardDescription>Enter your text in English or Nepali</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your text here..."
                className="min-h-[200px] resize-none"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-muted-foreground">
                  {input.length} characters
                </span>
                <Button onClick={handleRunAPI} disabled={isLoading || !input.trim()}>
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Run API
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Output</CardTitle>
                  <CardDescription>API response</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyOutput}
                    disabled={!output}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCode}
                  >
                    <Code className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="min-h-[200px] p-4 bg-muted rounded-lg">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="h-6 w-6 animate-spin mr-2" />
                    <span className="text-muted-foreground">Processing your request...</span>
                  </div>
                ) : output ? (
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                    {output}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Run an API call to see the output here
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
              <CardDescription>Integration examples</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                <TabsContent value="javascript" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`import { createClient } from '@blinkdotnew/sdk'

const blink = createClient({
  projectId: 'nepali-ai-platform-rza9bzyv'
})

const response = await blink.ai.generateText({
  prompt: "${input}",
  model: "gpt-4o-mini",
  maxTokens: 300
})

console.log(response.text)`}
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="python" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`import requests

response = requests.post(
    'https://api.blink.new/ai/generate-text',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'prompt': '${input}',
        'model': 'gpt-4o-mini',
        'maxTokens': 300
    }
)

print(response.json()['text'])`}
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="curl" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`curl -X POST https://api.blink.new/ai/generate-text \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "${input}",
    "model": "gpt-4o-mini",
    "maxTokens": 300
  }'`}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PlaygroundPage
