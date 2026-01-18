---
title: "Building a personal website with AI"
date: 2025-05-24
type: essay
author: "Alleya Hanifa"
excerpt: "How I, a coding n00b, built this pretty website with Claude."
tags: ["tech", "building"]
---

Dusting off my personal website is almost like a yearly ritual. Around this time last year, I made my Jekyll-based personal website with the help of ChatGPT. It was okay-ish, but I had a really hard time customising it because Jekyll's limitation. Maybe it was also because of ChatGPT's capability at the time?

*My sad-looking old blog*

So, I tried building a personal website from scratch again this year. Now, I have the assistance of Claude. I really like the result so far, and I can customise it the way I want to. Since I'm having so much fun and momentum, I'm going to walk you through how I built this website with the help of Claude. 

I think this project is perfect if you want to get familiarised with using AI tools and expose yourself to web development.

Before I tell you how, I'm gonna bore you with my life story and beliefs. Hold on tight.

## Why a website?

Long story short, I've grown tired of modern-day social media. Where to start? It has reshaped our social interactions in superficial ways, fed us with information we don't want to see, making us mere marketing targets, etc etc. It really makes the internet an awful place for me, for the most part. Yes, I know it has advantages. But for me, the bad outweighs the good.

I love making things, but with how social media are designed, it wired me to check how many people have seen or liked my post. Heck, I can't even truly make anything for my own satisfaction. I have tried to rewire my brain by saying things like "who cares how many likes you get?" to myself, installing 'jailbroken' versions of the apps, or asking my intention before posting anything. Yet, it's still plaguing me. I'm fighting a system designed by world-class designers, researchers, behavioural scientists, and data scientists, after all. It'd be naive to say, "It's just a matter of mindset!"

It's not like I hate the internet or tech. I am almost an internet native, since I had the privilege of accessing it so early. Blogging was a big part of my life when I was younger, and now I work in the industry, after all. Plainly put, I believe that tech, when used purposefully, can improve lives. I see the good things it can bring, but social media just isn't it.

So, I reach out for ways to express myself on the internet in a way that is healthier for me. Right now, it looks like a personal website outside of the system I despise. It allows me to customise *everything* to my likings, showcase everything without the burden of superficial metrics.

Ok, now let's get building!

## What you need

1. Access to premium Claude.
2. Requirements for your website.

### Access to the premium tier of Claude.

#### Why Claude?

Because I've heard (not because I technically know) Claude is the best for coding. Another (irrational) reason is that Claude seems to have [a more positive view of itself](https://x.com/Josikinz/status/1905787558770217469) compared to ChatGPT. If I have to work with a computer, I'd rather work with one with a more positive vibe, which might generate more creative outputs. (Might be a totally baseless assumption, though). 

But I believe you can make do with ChatGPT also!

#### Why Premium?

Because if you don't know how to code (like me), you will heavily depend on the AI tool to generate all of the code for you. If you're using the free tier, you're going to hit the limit quickly.

### Blog requirements

#### What do you mean by requirements?

Basically, the things/features/capabilities you want your website to have. Think about what's your goal is for the website. Is it for showcasing your work? Finding a job? Super-customisable Linktree? The goal will directly impact the requirements.

One thing about working with AI tool is you have to be clearly communicating what you want Actually, this is also how you effectively work with humans… but at least humans are smart and can decipher nuances. Meanwhile, think of AI tools as super-smart technical interns who might not know who you are.

As for me, I want this website to be the extension of myself on the internet. A showcase of the things I like. Since it's mainly for me, I don't really care if the UX is kind of unconventional/bad, as long as it serves my needs and is FUN. 

The requirements I have for the homepage:
```
Two latest blog entries
> A featured image
> Show my latest status/microblog
> Place to embed a chatbox (bringing back cbox from the golden days of Blogspot. I can't believe the website is still around!)
> Space to show my super specific pages/collections
```

You can also specify your design preferences, colour palettes, and even attach your sketch/wireframe/website inspo.

*A sketch/wireframe I gave to Claude*


Below is my requirements. This one has been perfected by Claude because mine was a lot messier and iterated over several sessions. Use this as a guide to build your own requirements. You don't have to define everything from the very start, and feel free to add things along the way. 

(However, please remember that Claude apparently can't bring context from one chat to another. So if you're hitting your message limit for one chat, you'll have to bring context from that one to the new one!)

```
Current Context:
* Personal website built with Eleventy
* Riso printing color palette (pink #ff6d9f, yellow #ffba00, teal #00b0c4, blue #1b5e7d, green #15a04b, orange #ff7b22)
* Homepage Sections: Blog, Gallery (Postcards), About, Now
* Status Cafe integration, Cbox chat widget
* Current pinboard/bulletin board homepage design
* Mobile-responsive with 70/30 desktop-fun/mobile-functional approach

Design Philosophy:
* FUN, WHIMSICAL, QUIRKY over sterile perfection
* Interactive and engaging - hover effects, animations, delightful micro-interactions
* Personal and authentic - feels like walking into Alleya's creative space
* Riso print inspiration - vibrant colors, slightly imperfect, handmade feel, layers

Content Goals:
* Showcase blog posts (personal stories, reviews, tech discoveries)
* Display photography in postcard/travel format
* Easy navigation to key pages (CV, Uses, Now status)
* Encourage visitor interaction through chat
* Reflect personality: loves food/travel

Technical Preferences:
* Eleventy static site generator
* Handwritten/display fonts (Mogra, Sono)

```

## Building with Claude

Disclaimer: I will not write about the step-by-step of the web development, but I touch more upon using Claude itself for helping you build your own website.

### Make a dedicated project for organisation and better results

'Project' is a feature available on Claude or ChatGPT which helps us organise our work. We can upload documents to a project or connect it with our GitHub repository so that when we start a chat, Claude will always refer to those documents and produce better results, as they have better context. For this purpose, I created a project specifically for a personal website. 

*A project on Claude*


### Make Claude teach you about coding

I used this opportunity to familiarise myself with web development. Even though Claude does all the heavy work of writing the code, I instructed it to explain things to me so I can learn more about the languages and concepts used. I did it by inserting my preferences in the project instructions.

*Teach me, Claude Senpai!*

### Start prompting and building

Insert your requirements along with the request. It can look something like:

```
 Help me build a personal website that is easy to maintain and user-friendly. However, I do not know where to host it cheaply. Please guide me step-by-step from the very beginning. Build based on the attached sketch.

Current Context:
* I'm using Windows
* Personal website built with Eleventy
* Riso printing color palette (pink #ff6d9f, yellow #ffba00, teal #00b0c4, blue #1b5e7d, green #15a04b, orange #ff7b22)
* Homepage Sections: Blog, Gallery (Postcards), About, Now
* Status Cafe integration, Cbox chat widget
* Current pinboard/bulletin board homepage design
* Mobile-responsive with 70/30 desktop-fun/mobile-functional approach

Design Philosophy:
* FUN, WHIMSICAL, QUIRKY over sterile perfection
* Interactive and engaging - hover effects, animations, delightful micro-interactions
* Personal and authentic - feels like walking into Alleya's creative space
* Riso print inspiration - vibrant colors, slightly imperfect, handmade feel, layers

Content Goals:
* Showcase blog posts (personal stories, reviews, tech discoveries)
* Display photography in postcard/travel format
* Easy navigation to key pages (CV, Uses, Now status)
* Encourage visitor interaction through chat
* Reflect personality: Indonesian, design researcher, preparing for masters, loves food/travel

Technical Preferences:
* Eleventy static site generator
* Handwritten/display fonts (Mogra, Sono)
* Deployment with Netlify

```

… And, the rest is history. Because Claude will teach you step-by-step, ask it all the beginner questions you have and have it explain to you like you're five. 

### Clarify often

At times, we will run into problems. The best way to explain the problems we encounter so that Claude can help solve them is by:

* attaching screenshot
* pasting the error message encountered
* … and repeat

*Me, troubleshooting*


### Connect to GitHub

Once you have reached the milestone of syncing/uploading/hosting your data to GitHub, connect your Claude project to GitHub so it can read all of the different codes you have and make problem-solving much quicker and accurate.

### Ask Claude to perfect your prompt

Ask Claude to refine your initial prompt for you. This becomes a lifesaver when you hit your chat limit and need to start fresh. Instead of struggling to remember all the context, just ask Claude something like "create a perfect prompt that includes all our project context, requirements, and current progress that I can use to start a new chat" 

For example, when I was halfway through building my site and hit the chat limit, Claude generated a comprehensive prompt that included my design philosophy, technical stack, current features, and even the specific issues I was debugging. Made jumping into a new chat seamless instead of starting from zero again.

Another scenario: when you realise your original requirements were too vague or you've discovered new needs mid-project. I initially just said "make it fun and whimsical" or attach a reference image from the internet, but later asked Claude to help me articulate exactly what that meant in technical terms. It created a much more detailed brief about riso printing aesthetics I'm basing this website on, specific interaction patterns, and even suggested CSS properties that would achieve the vibe I wanted. Way more useful than my poor orginial prompt lol~

## Takeaway

I am honestly blown away by Claude's capability to assist me in building this website. It can understand my creative preferences and explain things to me in ways I can easily understand while also teaching me concepts in web development. Before this project, I could not fathom how software engineers code on their computers locally and somehow it's live on the internet. But now I understand what 'commit' and 'push' are. I get the gist of how HTML and CSS work with each other, which is excellent. 

Subscribing to Claude probably is the best $20 I spent this month! 

Let me know how your web building goes by commenting in the chatbox on my homepage. Happy building! 😁👩‍💻