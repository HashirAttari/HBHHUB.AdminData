module.exports = (props) => {
  const Layout = { siteName: "Dashboard", SiteNameConfig: { icon: "📊" } };
  const Sidebar = ((LucideIcons, { websiteBase } = {}) => {
    return [{
      items: [
        { label: "Revalidate", href: '/revalidate', icon: "⚡", description: "Quickly refresh cached data" },
        { label: "Rremote Frame Tester", href: '/remote-frame-tester', icon: "🌐", description: "Quickly Check Remote HTML" }
      ]
    }];
  });
  return { Layout, Sidebar };
};
