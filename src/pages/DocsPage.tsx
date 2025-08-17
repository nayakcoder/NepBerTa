import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Button } from '../components/ui/button'
import { BookOpen, Code, Download, ExternalLink, Globe } from 'lucide-react'

const DocsPage = () => {
  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/chat',
      description: 'Chat with Nepali AI models',
      descriptionNp: 'नेपाली AI मोडेलहरूसँग च्याट गर्नुहोस्'
    },
    {
      method: 'POST',
      endpoint: '/api/translate',
      description: 'Translate between English and Nepali',
      descriptionNp: 'अंग्रेजी र नेपाली बीच अनुवाद गर्नुहोस्'
    },
    {
      method: 'POST',
      endpoint: '/api/sentiment',
      description: 'Analyze sentiment of Nepali text',
      descriptionNp: 'नेपाली पाठको भावना विश्लेषण गर्नुहोस्'
    },
    {
      method: 'POST',
      endpoint: '/api/caption',
      description: 'Generate Nepali captions for images',
      descriptionNp: 'छविहरूका लागि नेपाली क्याप्शन उत्पन्न गर्नुहोस्'
    }
  ]

  const models = [
    {
      name: 'NepBERTa',
      nameNp: 'नेपबर्टा',
      description: 'BERT model fine-tuned on Nepali corpus',
      descriptionNp: 'नेपाली कर्पसमा फाइन-ट्युन गरिएको BERT मोडेल',
      tasks: ['Sentiment Analysis', 'Text Classification', 'Named Entity Recognition'],
      tasksNp: ['भावना विश्लेषण', 'पाठ वर्गीकरण', 'नामित इकाई पहिचान']
    },
    {
      name: 'NepaliGPT',
      nameNp: 'नेपाली जीपीटी',
      description: 'Generative model for Nepali text',
      descriptionNp: 'नेपाली पाठका लागि जेनेरेटिभ मोडेल',
      tasks: ['Text Generation', 'Conversation', 'Creative Writing'],
      tasksNp: ['पाठ उत्पादन', 'कुराकानी', 'रचनात्मक लेखन']
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Documentation</h1>
            <p className="text-muted-foreground">Complete guide to using Nepali AI Platform</p>
          </div>
          <div className="ml-auto flex gap-2">
            <Badge variant="secondary">
              <Globe className="h-3 w-3 mr-1" />
              English
            </Badge>
            <Badge variant="outline">
              नेपाली
            </Badge>
          </div>
        </div>
        <Separator />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="api">API Reference</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Quick start guide for developers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">1. Installation</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">npm install @blinkdotnew/sdk</code>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">2. Initialize Client</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`import { createClient } from '@blinkdotnew/sdk'

const blink = createClient({
  projectId: 'nepali-ai-platform-rza9bzyv'
})`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">3. Make API Calls</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`const response = await blink.ai.generateText({
  prompt: 'नमस्कार! तपाईं कस्तो हुनुहुन्छ?',
  model: 'gpt-4o-mini'
})

console.log(response.text)`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>What makes our platform unique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Nepali Language Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        Models specifically trained and fine-tuned for Nepali language understanding
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Cultural Context</h4>
                      <p className="text-sm text-muted-foreground">
                        Understanding of Nepali culture, traditions, and local context
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Open Source</h4>
                      <p className="text-sm text-muted-foreground">
                        Free and open-source models available for research and development
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Multimodal Capabilities</h4>
                      <p className="text-sm text-muted-foreground">
                        Text, image, and speech processing in Nepali context
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="models" className="space-y-6">
          <div className="grid gap-6">
            {models.map((model, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {model.name}
                        <Badge variant="secondary">{model.nameNp}</Badge>
                      </CardTitle>
                      <CardDescription>{model.description}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Supported Tasks</h4>
                      <div className="flex flex-wrap gap-2">
                        {model.tasks.map((task, taskIndex) => (
                          <Badge key={taskIndex} variant="outline">
                            {task}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Usage Example</h4>
                      <pre className="text-sm overflow-x-auto">
{`const response = await blink.ai.generateText({
  prompt: 'Your Nepali text here',
  model: '${model.name.toLowerCase()}',
  maxTokens: 150
})

console.log(response.text)`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
              <CardDescription>Available API endpoints and their usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={endpoint.method === 'POST' ? 'default' : 'secondary'}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {endpoint.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {endpoint.descriptionNp}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>How to authenticate your API requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  All API requests require authentication using your project ID. Include it in your client initialization:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`const blink = createClient({
  projectId: 'your-project-id',
  authRequired: false // For public APIs
})`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Chat Example</CardTitle>
                <CardDescription>Building a Nepali chatbot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`import { createClient } from '@blinkdotnew/sdk'

const blink = createClient({
  projectId: 'nepali-ai-platform-rza9bzyv'
})

async function chatWithAI(message) {
  const response = await blink.ai.generateText({
    prompt: \`You are a helpful AI assistant that can communicate in Nepali. User said: "\${message}"\`,
    model: 'gpt-4o-mini',
    maxTokens: 200
  })
  
  return response.text
}

// Usage
const reply = await chatWithAI('नमस्कार!')
console.log(reply)`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Image Caption Example</CardTitle>
                <CardDescription>Generate Nepali captions for images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`async function captionImage(imageUrl) {
  const response = await blink.ai.generateText({
    messages: [{
      role: "user",
      content: [
        { 
          type: "text", 
          text: "Describe this image in Nepali" 
        },
        { 
          type: "image", 
          image: imageUrl 
        }
      ]
    }],
    model: 'gpt-4o-mini'
  })
  
  return response.text
}

// Usage
const caption = await captionImage('https://example.com/image.jpg')
console.log(caption)`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Community Resources</CardTitle>
              <CardDescription>Additional resources and community links</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <div className="text-left">
                      <div className="font-semibold">GitHub Repository</div>
                      <div className="text-sm text-muted-foreground">Source code and examples</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </Button>
                
                <Button variant="outline" className="justify-start h-auto p-4" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="text-left">
                      <div className="font-semibold">Discord Community</div>
                      <div className="text-sm text-muted-foreground">Join our developer community</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </Button>
                
                <Button variant="outline" className="justify-start h-auto p-4" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="text-left">
                      <div className="font-semibold">Research Papers</div>
                      <div className="text-sm text-muted-foreground">Academic publications</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </Button>
                
                <Button variant="outline" className="justify-start h-auto p-4" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="text-left">
                      <div className="font-semibold">Tutorials</div>
                      <div className="text-sm text-muted-foreground">Step-by-step guides</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default DocsPage
