import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  MessageSquare, 
  Code, 
  Image, 
  BookOpen, 
  Users, 
  Zap, 
  Globe, 
  Heart,
  ArrowRight,
  Github,
  Star
} from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Nepali Language Chat',
      titleNp: 'नेपाली भाषा च्याट',
      description: 'Interactive chat with fine-tuned NepBERTa and NepaliGPT models',
      descriptionNp: 'फाइन-ट्युन गरिएको NepBERTa र NepaliGPT मोडेलहरूसँग अन्तरक्रियात्मक च्याट',
      link: '/chat'
    },
    {
      icon: Code,
      title: 'API Playground',
      titleNp: 'API खेलकुद',
      description: 'Test and integrate our AI models with real-time API testing',
      descriptionNp: 'वास्तविक समयमा API परीक्षणको साथ हाम्रो AI मोडेलहरू परीक्षण र एकीकरण गर्नुहोस्',
      link: '/playground'
    },
    {
      icon: Image,
      title: 'Multimodal Tools',
      titleNp: 'बहुमोडल उपकरणहरू',
      description: 'Image captioning in Nepali and text-to-image generation',
      descriptionNp: 'नेपालीमा छवि क्याप्शनिङ र पाठ-देखि-छवि उत्पादन',
      link: '/image-tools'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      titleNp: 'कागजात',
      description: 'Comprehensive guides in English and Nepali',
      descriptionNp: 'अंग्रेजी र नेपालीमा व्यापक गाइडहरू',
      link: '/docs'
    },
    {
      icon: Users,
      title: 'Community',
      titleNp: 'समुदाय',
      description: 'Join developers and researchers building AI for Nepal',
      descriptionNp: 'नेपालका लागि AI निर्माण गर्ने विकासकर्ता र अनुसन्धानकर्ताहरूसँग सामेल हुनुहोस्',
      link: '/community'
    },
    {
      icon: Globe,
      title: 'Open Source',
      titleNp: 'खुला स्रोत',
      description: 'Free and open-source AI models for everyone',
      descriptionNp: 'सबैका लागि निःशुल्क र खुला स्रोत AI मोडेलहरू',
      link: 'https://github.com'
    }
  ]

  const stats = [
    { label: 'AI Models', labelNp: 'AI मोडेलहरू', value: '5+' },
    { label: 'Languages', labelNp: 'भाषाहरू', value: '2' },
    { label: 'Open Source', labelNp: 'खुला स्रोत', value: '100%' },
    { label: 'Community', labelNp: 'समुदाय', value: 'Growing' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <Heart className="h-3 w-3 mr-1 text-primary" />
              Made in Nepal, for Nepal
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nepali AI Platform
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Open-source AI models fine-tuned for Nepali language and context
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-medium">
              नेपाली भाषा र सन्दर्भका लागि फाइन-ट्युन गरिएको खुला स्रोत AI मोडेलहरू
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/chat">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Start Chatting
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/playground">
                  <Code className="h-5 w-5 mr-2" />
                  Try API
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  <Star className="h-4 w-4 mr-1" />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Powerful AI Tools for Nepal
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive suite of AI models and tools designed specifically for Nepali language processing and cultural context
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/5" asChild>
                    <Link to={feature.link}>
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build with Nepali AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of developers, researchers, and enthusiasts building the future of AI in Nepal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/chat">
                <Zap className="h-5 w-5 mr-2" />
                Get Started Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/docs">
                <BookOpen className="h-5 w-5 mr-2" />
                Read Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">नAI</span>
              </div>
              <span className="font-bold text-lg">Nepali AI Platform</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link>
              <Link to="/community" className="hover:text-primary transition-colors">Community</Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Nepali AI Platform. Open source and built with ❤️ for Nepal.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
