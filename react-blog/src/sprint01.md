# Sprint 1: Getting Started
## Build a Blog
### by Roger Mullins / Team DaVinci

[Click Here to Return to the Main Page](blog.md)

- [Test Post](#test-post)
- [Question: Was your first week what you expected?](#question-was-your-first-week-what-you-expected)
- [Question: What are you excited or eager to learn more about?](#question-what-are-you-excited-or-eager-to-learn-more-about)
- [Question: What is something about you that can only be learned from this blog?](#question-what-is-something-about-you-that-can-only-be-learned-from-this-blog)
- [Cool Git Commands I Learned During Sprint 1](#cool-git-commands)
- [Post-Demo Thoughts](#post-demo-thoughts)

---

## Test Post

This is the beginning of my blog, using:

- GitHub
- GitPod
- git from the command line inside the GitPod terminal

[Return to Table of Contents](#posts)

---

## Question: Was your first week what you expected?

I think overall the first week was about what I expected.

### Getting An Environment Set Up

I spent a lot of time Tuesday and Wednesday getting my coding environment configured the way I wanted it (although to be fair it's definitely still a work in progress). I found a GitPod color theme that's close to, but not exactly, what I have on my VS Code install so once that was activated I felt a little more at home.

I also had to literally create a coding environment. We're in the middle of an extensive kitchen renovation at home (which was supposed to be finished before Bootcamp, but our contractor had other plans) and it has disrupted essentially all of the rest of the house. So I am writing this, as I've done all the other work this week, in a cleaned-out corner of our guest bedroom with my computer hooked up on my oldest daughter's sewing table which she has graciously given me use of through December.

### Learning How to Learn

Another element I expected as we got started was that I would have to get myself back into a student rhythm. I'm quite a few years removed from really intense studying and learning, and there were definitely some cobwebs I had to shake out. In all honesty, I was a bit overwhelmed the first time I opened our classroom. But once I settled down and started working through it methodically, one module at a time, it started to feel ever-so-slightly more doable.

### Time Management

Time management has been a huge growth area for me this week. I know I don't have a monopoly on 'life stuff' but I still have a 7th-grader and a high school (eek - still getting used to that) freshman, my wife works full-time, I'm still working full-time until September 15, and we just got a puppy (to join our three cats and other dog). So needless to say there aren't a lot of opportunities to engage in fully-dedicated 'me' time, unless it's between roughly midnight and 5 a.m. (Actually, that's not exclusively me time either, if one of the cats notices the light on). But we're all gradually adjusting.

### Conclusion

It has been a busy, but fulfilling, week. If anything would be considered unexpected, I would say the pace has probably been just a little more intense than I anticipated. However I think overall that's a good thing. We covered a lot of ground this week, and we have a lot more to go. I'm looking forward to it!

[Return to Table of Contents](#posts)

---

## Question: What are you excited or eager to learn more about?

There were a few things I just learned about this week and am looking forward to working with more.

### GitPod

This - and I'm fully aware how nerdy this sounds - is phenomenal. I really can't believe I had never heard of it before. 

I was actually dreading having to use Git during bootcamp because I've had some struggles with it in the past trying to use it on my local machine and coordinating with GitHub. However, the built-in integration we have with GitPod is definitely a game-changer and now I have to say I'm excited to get up to speed on everything Git can do.

### Collaboration

This probably sounds weird, but maybe it will make more sense when I say that I've been in my current, soon-to-be-former job for almost sixteen years. As people have left the firm I've just sort of absorbed their function in the name of efficiency. It's to the point now where I essentially have no colleagues left. I'm looking forward to being a part of this community, helping one another through Bootcamp.

### Developer Life

Along those same lines, I'm looking forward to learning more about what it's like to be a full-time developer. Other than the Awesome Inc. Intro to Web Developing class back in the spring, my last official computer class was in 1998 and we did everything in Pascal. I have some ground to make up.

[Return to Table of Contents](#posts)

---

## Question: What is something about you that can only be learned from this blog?

I love old computers from the 1980s and own probably entirely too many. They're not all currently hooked up but all are in working order. Among them:

| System | Image (From Wikimedia) |
|---|---|
| An Atari 800 (1979) | <img src ="img/atari800.jpeg" width="100px" alt="Atari 800"> |
| A Texas Instruments TI-99/4a | <img src ="img/ti994a.jpeg" width="100px" alt="Texas Instruments TI-99/4a"> |
| IBM PC (The original, no hard drive) | <img src ="img/ibmpc.jpg" width="100px" alt="IBM PC"> |
| IBM PC-AT (A few years later - 286 with a 20MB HD) | <img src ="img/ibmpcat.jpg" width="100px" alt="IBM PC-AT"> |
| An Apple II | <img src ="img/appleii.png" width="100px" alt="Apple II"> |
| A TRS-80 Color Computer | <img src ="img/ibmcoco.jpg" width="100px" alt="TRS-80 CoCo"> |
| A TRS-80 Model 100 - A laptop from 1983 | <img src ="img/trs80model100.jpg" width="100px" alt="TRS-80 Model 100"> |

And last but not least, and awesome enough to deserve its own single-item markdown table:

| System | Image (From Wikimedia) |
|---|---|
| Commodore 64 | <img src ="img/c64.jpg" width="100px" alt="Commodore 64"> |

That one is actually hooked up for gaming. 

There are a few holes in my collection, so if you have one of these laying around gathering dust I'll give it a loving forever home:

| System | Image (From Wikimedia) |
|---|---|
| Compaq 'luggable' - the first IBM clone | <img src ="img/compaq.jpg" width="100px" alt="Compaq"> |
| Commodore PET | <img src ="img/commodorepet.jpg" width="100px" alt="Commodore 64"> |
| Commodore 128-D | <img src ="img/c128d.jpg" width="100px" alt="Commodore 128-D"> |
| TRS-80 Model 3 | <img src ="img/trs80modeliii.jpg" width="100px" alt="TRS-80 Model 3"> |

[Return to Table of Contents](#posts)

---

## Cool Git Commands

I had used Git off and on in the past but never seriously. I thought it might be handy to list the commands I used this week in setting up this blog.

```
$ git checkout -b dev
```

That command creates a new branch in the repo called 'dev' where I can work on changes to the blog.

```
$ git status
```

This (unsurprisingly) lists the files that are being modified and (importantly) whether or not Git is aware of them. I check this periodically just to make sure everything has been tracked.

```
$ git add -A
```

This command adds all the files so they're included in the commit.

```
$ git commit -m "This is a test"
```

Once everything is added, this is how it's committed. 

```
$ git push origin dev
```

Finally, this pushes the local (GitPod) changes back to the repository.

[Return to Table of Contents](#posts)

---

## Post-Demo Thoughts

It was great seeing how everyone on team Da Vinci tackled the blog project.

Overall it was a good reminder that there is never one particular way to approach a project. I learned quite a bit and took some inspiration from the other blogs and I hope this blog did the same for some of the others. 

[Return to Table of Contents](#posts)

---

##### Questions or comments? [Contact the Author](mailto:rogermullins.mba@gmail.com)
