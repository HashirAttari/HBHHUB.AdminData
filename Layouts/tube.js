module.exports = (props) => {
  const { slugHelper } = props || {};
  const Layout = { siteName: "HBHTube", SiteNameConfig: { icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tube" x1="3" y1="3" x2="21" y2="21"><stop stop-color="#FB7185"/><stop offset="1" stop-color="#DC2626"/></linearGradient></defs><rect x="2" y="4" width="20" height="16" rx="5" fill="url(#tube)" fill-opacity=".16" stroke="url(#tube)" stroke-width="1.6"/><path d="M10 8.5a1 1 0 0 0-1.5.87v5.26a1 1 0 0 0 1.5.87l5-2.63a1 1 0 0 0 0-1.74l-5-2.63Z" fill="url(#tube)"/><path d="M8 2.5h8" stroke="#FB7185" stroke-width="1.8" stroke-linecap="round"/></svg>`, } };
  const Sidebar = ((LucideIcons) => {
    // return [];
    const returner = [{ items: [{ label: "Content-Testing", href: '/content/testing' }] }];
    // slugHelper(returner, ((name, label) => { return `/${name}`; }));
    return returner;
  });
  return { Layout, Sidebar };
};
