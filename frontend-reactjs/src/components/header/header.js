import React from 'react';
import {
    Header,
    HeaderMenuButton,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderSideNavItems,
    SkipToContent,
    SideNav,
    SideNavItems
  } from 'carbon-components-react/es/components/UIShell';

import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';

const HeaderBlog = () => (
  <Header aria-label="Posts">
    <SkipToContent />
    <HeaderMenuButton
      aria-label="Open menu"
      onClick={onClickSideNavExpand}
      isActive={isSideNavExpanded}
    />
    <HeaderName href="/" prefix="App">
      Posts
    </HeaderName>
    <HeaderNavigation aria-label="Posts">
      <HeaderMenuItem href="#">Comments</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction
        aria-label="Search"
        onClick={action('search click')}
      >
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction
        aria-label="Notifications"
        onClick={action('notification click')}
      >
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction
        aria-label="App Switcher"
        onClick={action('app-switcher click')}
      >
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
    <SideNav
      aria-label="Side navigation"
      expanded={isSideNavExpanded}
      isPersistent={false}
    >
      <SideNavItems>
        <HeaderSideNavItems>
          <HeaderMenuItem href="#">Comments</HeaderMenuItem>
        </HeaderSideNavItems>
      </SideNavItems>
    </SideNav>
  </Header>
)

const onClickSideNavExpand = () => {
    return false;
}

const isSideNavExpanded = false;

const action = (msg) => {
    
}

export default HeaderBlog;