import { useState, useRef } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Upload, Image as ImageIcon, Wand2, Download, Loader2, Camera } from 'lucide-react'
import { toast } from 'sonner'
import blink from '../blink/client'

const ImageToolsPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageCaption, setImageCaption] = useState('')
  const [textPrompt, setTextPrompt] = useState('हिमालयको सुन्दर दृश्य, बिहानको सूर्योदय')
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast.error('Image size should be less than 10MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setImageCaption('')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageCaption = async () => {
    if (!selectedImage) {
      toast.error('Please upload an image first')
      return
    }

    setIsProcessing(true)
    setImageCaption('')

    try {
      // Upload image to storage first
      const response = await fetch(selectedImage)
      const blob = await response.blob()
      const file = new File([blob], 'image.jpg', { type: 'image/jpeg' })
      
      const { publicUrl } = await blink.storage.upload(
        file,
        `image-captions/${Date.now()}.jpg`,
        { upsert: true }
      )

      // Generate caption using AI
      const captionResponse = await blink.ai.generateText({
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "Describe this image in detail in both English and Nepali. Provide a comprehensive description that captures the main elements, colors, mood, and context." },
              { type: "image", image: publicUrl }
            ]
          }
        ],
        model: 'gpt-4o-mini',
        maxTokens: 300
      })

      setImageCaption(captionResponse.text)
      toast.success('Image caption generated successfully!')
    } catch (error) {
      console.error('Error generating caption:', error)
      toast.error('Failed to generate caption. Please try again.')
      setImageCaption('Error: Failed to generate caption. Please try again with a different image.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleTextToImage = async () => {
    if (!textPrompt.trim()) {
      toast.error('Please enter a text prompt')
      return
    }

    setIsGenerating(true)
    setGeneratedImages([])

    try {
      const response = await blink.ai.generateImage({
        prompt: `${textPrompt}. High quality, detailed, beautiful composition.`,
        size: '1024x1024',
        quality: 'high',
        n: 2
      })

      const imageUrls = response.data.map(img => img.url)
      setGeneratedImages(imageUrls)
      toast.success('Images generated successfully!')
    } catch (error) {
      console.error('Error generating images:', error)
      toast.error('Failed to generate images. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownloadImage = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `nepali-ai-generated-${index + 1}.png`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      toast.success('Image downloaded successfully!')
    } catch (error) {
      console.error('Error downloading image:', error)
      toast.error('Failed to download image')
    }
  }

  const examplePrompts = [
    'हिमालयको सुन्दर दृश्य, बिहानको सूर्योदय',
    'काठमाडौंको दरबार स्क्वायर, पारम्परिक वास्तुकला',
    'नेपाली गाउँको जीवन, धान खेत र पहाडहरू',
    'पशुपतिनाथ मन्दिर, आध्यात्मिक वातावरण',
    'एभरेस्ट आधार शिविर, हिउँले ढाकिएको पहाड'
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <ImageIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Multimodal AI Tools</h1>
            <p className="text-muted-foreground">Image captioning and generation with Nepali context</p>
          </div>
          <Badge variant="secondary" className="ml-auto">
            <Camera className="h-3 w-3 mr-1" />
            Multimodal
          </Badge>
        </div>
        <Separator />
      </div>

      <Tabs defaultValue="caption" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="caption">Image Captioning</TabsTrigger>
          <TabsTrigger value="generate">Text to Image</TabsTrigger>
        </TabsList>

        <TabsContent value="caption" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Image</CardTitle>
                <CardDescription>Upload an image to get a detailed caption in Nepali and English</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {selectedImage ? (
                    <div className="space-y-4">
                      <img
                        src={selectedImage}
                        alt="Uploaded"
                        className="max-w-full max-h-64 mx-auto rounded-lg object-contain"
                      />
                      <p className="text-sm text-muted-foreground">Click to change image</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                      <div>
                        <p className="text-lg font-medium">Upload an image</p>
                        <p className="text-sm text-muted-foreground">
                          Click to browse or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Supports JPG, PNG, WebP (max 10MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button
                  onClick={handleImageCaption}
                  disabled={!selectedImage || isProcessing}
                  className="w-full"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Caption...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-4 w-4 mr-2" />
                      Generate Caption
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Caption Results */}
            <Card>
              <CardHeader>
                <CardTitle>Generated Caption</CardTitle>
                <CardDescription>AI-generated description in Nepali and English</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="min-h-[300px] p-4 bg-muted rounded-lg">
                  {isProcessing ? (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="h-6 w-6 animate-spin mr-2" />
                      <span className="text-muted-foreground">Analyzing image...</span>
                    </div>
                  ) : imageCaption ? (
                    <div className="space-y-4">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                        {imageCaption}
                      </pre>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(imageCaption)
                          toast.success('Caption copied to clipboard!')
                        }}
                      >
                        Copy Caption
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Upload an image and click "Generate Caption" to see the description here
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="generate" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Text Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>Text Prompt</CardTitle>
                <CardDescription>Describe what you want to generate in Nepali or English</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={textPrompt}
                  onChange={(e) => setTextPrompt(e.target.value)}
                  placeholder="Enter your image description..."
                  className="text-base"
                />
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Example prompts:</p>
                  <div className="grid gap-2">
                    {examplePrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="justify-start h-auto p-2 text-left"
                        onClick={() => setTextPrompt(prompt)}
                      >
                        <span className="text-xs">{prompt}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleTextToImage}
                  disabled={!textPrompt.trim() || isGenerating}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Images...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-4 w-4 mr-2" />
                      Generate Images
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Images */}
            <Card>
              <CardHeader>
                <CardTitle>Generated Images</CardTitle>
                <CardDescription>AI-generated images based on your prompt</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="min-h-[400px]">
                  {isGenerating ? (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="h-8 w-8 animate-spin mr-3" />
                      <span className="text-muted-foreground">Creating your images...</span>
                    </div>
                  ) : generatedImages.length > 0 ? (
                    <div className="grid gap-4">
                      {generatedImages.map((imageUrl, index) => (
                        <div key={index} className="space-y-2">
                          <img
                            src={imageUrl}
                            alt={`Generated ${index + 1}`}
                            className="w-full rounded-lg object-cover"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownloadImage(imageUrl, index)}
                            className="w-full"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Image {index + 1}
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Enter a text prompt and click "Generate Images" to create AI artwork
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ImageToolsPage
