import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  author: "Marco Singer",
  avatar: "./images/profile.png",
  avatarClass: "rounded-full",
  background: "#f9f9f9",
  lang: "en",
  links: [
    { title: "GitHub", url: "https://github.com/marcosinger" },
    { title: "Twitter", url: "https://twitter.com/mahsinger" },
  ],
  timezone: "en-US",
  title: "Marco Singer",
});
