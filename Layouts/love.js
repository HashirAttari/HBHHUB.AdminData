module.exports = (props) => {
  const { slugHelper } = props || {};
  const Layout = {
    siteName: "HBHLove", requiredSiteName: true, user: false,
    SiteNameConfig: {
      siteName: ["صاحبہ", "میری جان", "یاحیاتی", "I❤️U", "محبت"],
      icon: "💖",
      icon: `<svg style="scale: 1.5" viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <!-- Heart Outline -->
        <path id="heart-outline" 
              d="M50 30 
                 C50 15, 80 15, 80 40
                 C80 60, 50 80, 50 80
                 C50 80, 20 60, 20 40
                 C20 15, 50 15, 50 30 Z"
              fill="transparent" 
              stroke="#e63946" 
              stroke-width="3" 
              stroke-dasharray="240" 
              stroke-dashoffset="240">
          <animate attributeName="stroke-dashoffset" 
                   from="240" to="0" dur="2s" fill="freeze"/>
        </path>
        <!-- Heart Fill (appears after outline) -->
        <path d="M50 30 
                 C50 15, 80 15, 80 40
                 C80 60, 50 80, 50 80
                 C50 80, 20 60, 20 40
                 C20 15, 50 15, 50 30 Z"
              fill="#e63946" 
              opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2s" fill="freeze"/>
        </path>
      </svg>`,
    }
  };
  const Sidebar = (() => {
    const returner = [
      {
        items: [
          { icon: '🖼️', label: "Gallery" },
          { icon: '💌', label: "Letters" },
          { icon: '💟', label: "Love-Board" },

          // { icon: '🎲', label: "Flip-Card" },
          // { icon: '🔮', label: "Dark-Flip-Card" },
          // { icon: '💫', label: "Random-Dark-Flip-Card" },
          // { icon: '💍', label: "Proposal-Card" },
          // { icon: '❤️', label: "TapMyHeart" },
          // { icon: '🔮', label: "Eid-Mubarak", new: true },
        ]
      }

    ];
    slugHelper(returner, ((name, label) => {
      return `/${label.toLowerCase()}`;
    }));
    return returner;
  });
  const configs = {
    gridId: "love-grid",
    storageName: "sahiba-favourite", basePath: "",
    heading: "I Love U - Sahiba", heading2: "My Love",
    paragraph: "U are my favourite person.",
  };
  return { Layout, Sidebar, configs };
};