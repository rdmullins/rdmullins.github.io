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
        postTitle: "Sprint 4 - React Restaurant",
        markdownFile: "sprint04-react.md",
        teaserTitle: "First Time Using React",
        teaserText: "Using the React library to dynamically build a restuarant menu from an API.",
        teaserPhoto: FrustratedDev
        // for teaserPhoto select from:
        //      BlogTeaserImage (closeup of VS code)
        //      FrustratedDev
        //      CloseupTyping
        //      Hammer
    }
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
];