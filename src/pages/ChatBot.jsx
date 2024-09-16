import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="bg-customBeige">
      <div className="flex flex-col h-screen w-full max-w-2xl mx-auto bg-background text-foreground">
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8  text-stone-800">
              <AvatarImage src="/placeholder-user.jpg" alt="Chatbot Avatar" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-medium">Chatbot</h2>
          </div>
          <Button variant="ghost" size="icon">
            <XIcon className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </Button>
        </header>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="bg-white rounded-lg p-3 max-w-[75%] shadow">
              <p>Hello, how can I assist you today?</p>
              <div className="text-xs text-muted-foreground mt-1">2:30 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#f0e6d2] rounded-lg p-3 max-w-[75%] shadow">
              <p>I'm doing well, thank you for asking! How can I help you today?</p>
              <div className="text-xs text-muted-foreground mt-1">2:31 PM</div>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Chatbot Avatar" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="bg-white rounded-lg p-3 max-w-[75%] shadow">
              <p>I'm looking to learn more about your product offerings. Can you provide an overview?</p>
              <div className="text-xs text-muted-foreground mt-1">2:32 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#f0e6d2] rounded-lg p-3 max-w-[75%] shadow">
              <p>
                Absolutely! Our product line includes a range of software solutions designed to streamline your business
                operations. We offer cloud-based tools for project management, customer relationship management, and data
                analytics. Each of our products is highly customizable and integrates seamlessly with your existing
                systems.
              </p>
              <div className="text-xs text-muted-foreground mt-1">2:34 PM</div>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Chatbot Avatar" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="bg-white rounded-lg p-3 max-w-[75%] shadow">
              <p>That sounds very promising. Can you provide more details on the pricing and deployment options?</p>
              <div className="text-xs text-muted-foreground mt-1">2:35 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#f0e6d2] rounded-lg p-3 max-w-[75%] shadow">
              <p>
                Certainly! Our pricing is based on a subscription model, with flexible plans to suit businesses of all
                sizes. We offer both cloud-hosted and on-premise deployment options, allowing you to choose the solution
                that best fits your IT infrastructure and security requirements.
              </p>
              <div className="text-xs text-muted-foreground mt-1">2:37 PM</div>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Chatbot Avatar" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="bg-white rounded-lg p-3 max-w-[75%] shadow">
              <p>That's great, I'd like to schedule a demo to learn more. What's the best way to do that?</p>
              <div className="text-xs text-muted-foreground mt-1">2:38 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#f0e6d2] rounded-lg p-3 max-w-[75%] shadow">
              <p>
                Wonderful! To schedule a demo, you can visit our website and click on the "Schedule a Demo" button. This
                will take you to a form where you can provide your contact information and preferred demo time. One of our
                sales representatives will then reach out to you to confirm the details.
              </p>
              <div className="text-xs text-muted-foreground mt-1">2:40 PM</div>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Chatbot Avatar" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="bg-white rounded-lg p-3 max-w-[75%] shadow">
              <p>Great, I'll do that. Thank you for your time and assistance!</p>
              <div className="text-xs text-muted-foreground mt-1">2:41 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-[#f0e6d2] rounded-lg p-3 max-w-[75%] shadow">
              <p>
                You're very welcome! I'm happy I could provide the information you were looking for. Please don't hesitate
                to reach out if you have any other questions. I'm always here to help.
              </p>
              <div className="text-xs text-muted-foreground mt-1">2:42 PM</div>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Chatbot Avatar" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="bg-background border-t px-4 py-3 flex items-center gap-2">
          <Textarea
            placeholder="Type your message..."
            className="flex-1 rounded-lg border-2 border-input p-2 focus:outline-none focus:ring-1 focus:ring-primary"
            rows={1}
          />
          <Button className="px-4 py-2 rounded-lg">Send</Button>
        </div>
      </div>
    </div>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}