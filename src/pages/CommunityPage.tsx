import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { 
  Users, 
  Github, 
  MessageSquare, 
  BookOpen, 
  Star, 
  ExternalLink,
  Heart,
  Code,
  Lightbulb,
  Trophy
} from 'lucide-react'

const CommunityPage = () => {
  const contributors = [
    {
      name: 'Dr. Rajesh Sharma',
      nameNp: 'डा. राजेश शर्मा',
      role: 'AI Researcher',
      roleNp: 'AI अनुसन्धानकर्ता',
      organization: 'Kathmandu University',
      organizationNp: 'काठमाडौं विश्वविद्यालय',
      avatar: '/api/placeholder/40/40',
      contributions: 'NepBERTa Model Development'
    },
    {
      name: 'Sita Poudel',
      nameNp: 'सीता पौडेल',
      role: 'ML Engineer',
      roleNp: 'ML इन्जिनियर',
      organization: 'Tech Startup',
      organizationNp: 'टेक स्टार्टअप',
      avatar: '/api/placeholder/40/40',
      contributions: 'Dataset Collection & Curation'
    },
    {
      name: 'Arjun Thapa',
      nameNp: 'अर्जुन थापा',
      role: 'Software Developer',
      roleNp: 'सफ्टवेयर विकासकर्ता',
      organization: 'Open Source Contributor',
      organizationNp: 'खुला स्रोत योगदानकर्ता',
      avatar: '/api/placeholder/40/40',
      contributions: 'Platform Development'
    }
  ]

  const projects = [
    {
      title: 'Nepali News Classifier',
      titleNp: 'नेपाली समाचार वर्गीकरणकर्ता',
      description: 'Automatic categorization of Nepali news articles',
      descriptionNp: 'नेपाली समाचार लेखहरूको स्वचालित वर्गीकरण',
      author: 'Community',
      stars: 45,
      language: 'Python'
    },
    {
      title: 'Devanagari OCR',
      titleNp: 'देवनागरी OCR',
      description: 'Optical Character Recognition for Nepali text',
      descriptionNp: 'नेपाली पाठका लागि अप्टिकल क्यारेक्टर रिकग्निसन',
      author: 'Research Team',
      stars: 78,
      language: 'Python'
    },
    {
      title: 'Nepali Chatbot Framework',
      titleNp: 'नेपाली च्याटबोट फ्रेमवर्क',
      description: 'Easy-to-use framework for building Nepali chatbots',
      descriptionNp: 'नेपाली च्याटबोट निर्माणका लागि प्रयोग गर्न सजिलो फ्रेमवर्क',
      author: 'Developers',
      stars: 92,
      language: 'JavaScript'
    }
  ]

  const events = [
    {
      title: 'AI for Nepal Workshop',
      titleNp: 'नेपालका लागि AI कार्यशाला',
      date: '2024-09-15',
      location: 'Kathmandu University',
      locationNp: 'काठमाडौं विश्वविद्यालय',
      type: 'Workshop',
      status: 'upcoming'
    },
    {
      title: 'Nepali NLP Hackathon',
      titleNp: 'नेपाली NLP ह्याकाथन',
      date: '2024-10-20',
      location: 'Online',
      locationNp: 'अनलाइन',
      type: 'Hackathon',
      status: 'upcoming'
    },
    {
      title: 'Open Source Contribution Drive',
      titleNp: 'खुला स्रोत योगदान अभियान',
      date: '2024-08-01',
      location: 'Community',
      locationNp: 'समुदाय',
      type: 'Initiative',
      status: 'ongoing'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="text-muted-foreground">Join the Nepali AI community and contribute to the future</p>
          </div>
          <Badge variant="secondary" className="ml-auto">
            <Heart className="h-3 w-3 mr-1" />
            Open Source
          </Badge>
        </div>
        <Separator />
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Contributors</div>
            <div className="text-xs text-muted-foreground">योगदानकर्ताहरू</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
            <div className="text-xs text-muted-foreground">परियोजनाहरू</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">1.2k</div>
            <div className="text-sm text-muted-foreground">GitHub Stars</div>
            <div className="text-xs text-muted-foreground">गिटहब स्टारहरू</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Universities</div>
            <div className="text-xs text-muted-foreground">विश्वविद्यालयहरू</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Get Involved */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Get Involved
            </CardTitle>
            <CardDescription>Ways to contribute to the Nepali AI ecosystem</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start h-auto p-4" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Contribute Code</div>
                    <div className="text-sm text-muted-foreground">Help improve our models and platform</div>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>
              </Button>

              <Button variant="outline" className="w-full justify-start h-auto p-4">
                <BookOpen className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Create Datasets</div>
                  <div className="text-sm text-muted-foreground">Help build high-quality Nepali datasets</div>
                </div>
              </Button>

              <Button variant="outline" className="w-full justify-start h-auto p-4">
                <MessageSquare className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Join Discussions</div>
                  <div className="text-sm text-muted-foreground">Participate in community forums</div>
                </div>
              </Button>

              <Button variant="outline" className="w-full justify-start h-auto p-4">
                <Code className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Build Applications</div>
                  <div className="text-sm text-muted-foreground">Create apps using our APIs</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Top Contributors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Top Contributors
            </CardTitle>
            <CardDescription>Community members making a difference</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contributors.map((contributor, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                  <Avatar>
                    <AvatarImage src={contributor.avatar} />
                    <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{contributor.name}</div>
                    <div className="text-sm text-muted-foreground">{contributor.role}</div>
                    <div className="text-xs text-muted-foreground">{contributor.organization}</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {contributor.contributions}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Projects */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Community Projects</CardTitle>
          <CardDescription>Open source projects built by the community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.titleNp}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-3 w-3" />
                    {project.stars}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {project.language}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    by {project.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Events & Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Events & Activities</CardTitle>
          <CardDescription>Upcoming and ongoing community events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{event.title}</h4>
                    <Badge variant={event.status === 'upcoming' ? 'default' : event.status === 'ongoing' ? 'secondary' : 'outline'}>
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{event.titleNp}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <span>{event.location}</span>
                    <Badge variant="outline" className="text-xs">{event.type}</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CommunityPage
