import BlogTeaserImage from "./pexels-luis-gomes-546819.jpg";
import FrustratedDev from "./pexels-andrea-piacquadio-3777572.jpg";
import CloseupTyping from "./pexels-lukas-574071.jpg";
import Hammer from "./pexels-pixabay-209235.jpg";

// Newest Post First

// --------TEMPLATE--------
// {
//     postTitle: "",
//     markdownFile: "",
//     teaserTitle: "",
//     teaserText: "",
//     teaserPhoto: ""
//     // for teaserPhoto select from:
//     //      BlogTeaserImage (closeup of VS code)
//     //      FrustratedDev
//     //      CloseupTyping
//     //      Hammer
// }

export const blogPosts = [
    {
        postTitle: "Five Ways to Become a Better Developer Using Pseudocode",
        markdownFile: "tech-article.md",
        teaserTitle: "Pseudocode for Better Dev",
        teaserText: "How pseudocoding - the art of planning out your approach to computer programming - can help you become a better developer.",
        teaserPhoto: CloseupTyping
        // for teaserPhoto select from:
        //      BlogTeaserImage (closeup of VS code)
        //      FrustratedDev
        //      CloseupTyping
        //      Hammer
    },
    {
        postTitle: "Sprint 5: APIs with Vanilla JS",
        markdownFile: "sprint05.md",
        teaserTitle: "Querying an API for Dynamic Content",
        teaserText: "How to use plain vanilla JavaScript to request and process data from an external source.",
        teaserPhoto: BlogTeaserImage
        // for teaserPhoto select from:
        //      BlogTeaserImage (closeup of VS code)
        //      FrustratedDev
        //      CloseupTyping
        //      Hammer
    },
    {
        postTitle: "Sprint 4: React Restaurant",
        markdownFile: "sprint04-react.md",
        teaserTitle: "First Time Using React",
        teaserText: "Using the React library to dynamically build a restuarant menu from an API.",
        teaserPhoto: FrustratedDev
        // for teaserPhoto select from:
        //      BlogTeaserImage (closeup of VS code)
        //      FrustratedDev
        //      CloseupTyping
        //      Hammer
    },
    {
        postTitle: "Sprint 4: Moving From Onboarding to In-Person",
        markdownFile: "sprint04.md",
        teaserTitle: "Transition to On-Campus",
        teaserText: "Moving from virtual boot camp to in-person, full time.",
        teaserPhoto: CloseupTyping
        // for teaserPhoto select from:
        //      BlogTeaserImage (closeup of VS code)
        //      FrustratedDev
        //      CloseupTyping
        //      Hammer
    },
    {
        postTitle: "Sprint 3: Foundations of JS and Pseudocode",
        markdownFile: "sprint03.md",
        teaserTitle: "Foundations of JS",
        teaserText: "Learning the basics of JavaScript.",
        teaserPhoto: Hammer
        // for teaserPhoto select from:
        //      BlogTeaserImage (closeup of VS code)
        //      FrustratedDev
        //      CloseupTyping
        //      Hammer
    },
    {
        postTitle: "Sprint 2: Structuring a Page of Content",
        markdownFile: "sprint02.md",
        teaserTitle: "Formatting Content",
        teaserText: "Using HTML and CSS to give structure to a page of content",
        teaserPhoto: CloseupTyping
        // for teaserPhoto select from:
        //      BlogTeaserImage (closeup of VS code)
        //      FrustratedDev
        //      CloseupTyping
        //      Hammer
    },
    {
        postTitle: "Sprint 1: Getting Started",
        markdownFile: "sprint01.md",
        teaserTitle: "Getting Started",
        teaserText: "The first post written for my coding boot camp blog.",
        teaserPhoto: Hammer
        // for teaserPhoto select from:
        //      BlogTeaserImage (closeup of VS code)
        //      FrustratedDev
        //      CloseupTyping
        //      Hammer
    }
];