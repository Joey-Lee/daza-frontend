import Error404 from './components/_error/Error404';

import MainWrapper from './components/_wrapper/MainWrapper';
import SimpleWrapper from './components/_wrapper/SimpleWrapper';

import HomeIndex from './components/home/Index';
import HomeSearch from './components/home/Search';
import HomeStatus from './components/home/Status';
import HomeDownloadApp from './components/home/DownloadApp';

import AccountRegister from './components/account/Register';
import AccountLogin from './components/account/Login';
import AccountLogout from './components/account/Logout';
import AccountPasswordReset from './components/account/PasswordReset';
import AccountSettings from './components/account/Settings';
import AccountRefreshToken from './components/account/RefreshToken';

import UserDetail from './components/user/UserDetail';
import UserFollowers from './components/user/UserFollowers';
import UserFollowing from './components/user/UserFollowing';

import CategoryList from './components/category/CategoryList';
import CategoryDetail from './components/category/CategoryDetail';

import TopicCreate from './components/topic/TopicCreate';
import TopicDetail from './components/topic/TopicDetail';
import TopicEdit from './components/topic/TopicEdit';
import TopicList from './components/topic/TopicList';

import ArticleCreate from './components/article/ArticleCreate';
import ArticleDetail from './components/article/ArticleDetail';
import ArticleEdit from './components/article/ArticleEdit';

import TagList from './components/tag/TagList';
import TagDetail from './components/tag/TagDetail';

import NotificationList from './components/notification/NotificationList';

// In-app
import InAppMainWrapper from './in-app-components/_wrapper/MainWrapper';
import InAppArticleDetail from './in-app-components/article/ArticleDetail';
import InAppError404 from './in-app-components/_error/Error404';

export default {
  '/': {
    component: MainWrapper,
    subRoutes: {
      '/': {
        name: 'home_index',
        component: HomeIndex,
      },
      '/home/:slug': {
        name: 'home_index_slug',
        component: HomeIndex,
      },
      '/search': {
        component: HomeSearch,
      },
      '/status': {
        component: HomeStatus,
      },
      '/download': {
        component: HomeDownloadApp,
      },
      '/users/:id': {
        name: 'user_detail',
        component: UserDetail,
      },
      '/users/:id/followers': {
        name: 'user_followers',
        component: UserFollowers,
      },
      '/users/:id/following': {
        name: 'user_following',
        component: UserFollowing,
      },
      '/categories': {
        component: CategoryList,
      },
      '/categories/:id': {
        component: CategoryDetail,
      },
      '/topics/create': {
        name: 'topic_create',
        component: TopicCreate,
      },
      '/topics': {
        name: 'topic_list',
        component: TopicList,
      },
      '/topics/:id/edit': {
        name: 'topic_edit',
        component: TopicEdit,
      },
      '/topics/:id/:tab': {
        name: 'topic_detail',
        component: TopicDetail,
      },
      '/articles/create': {
        name: 'article_create',
        component: ArticleCreate,
      },
      '/articles/:id': {
        name: 'article_detail',
        component: ArticleDetail,
      },
      '/articles/:id/edit': {
        name: 'article_edit',
        component: ArticleEdit,
      },
      '/tags': {
        name: 'tag_list',
        component: TagList,
      },
      '/tags/:name': {
        name: 'tag_detail',
        component: TagDetail,
      },
      '/notifications': {
        name: 'notification_list',
        component: NotificationList,
      },
      '*': {
        component: Error404,
      },
    },
  },
  '/account': {
    component: SimpleWrapper,
    subRoutes: {
      '/register': {
        component: AccountRegister,
      },
      '/login': {
        component: AccountLogin,
      },
      '/logout': {
        component: AccountLogout,
      },
      '/password_reset': {
        component: AccountPasswordReset,
      },
      '/refresh_token': {
        name: 'account_refresh_token',
        component: AccountRefreshToken,
      },
    },
  },
  '/account/settings': {
    component: MainWrapper,
    subRoutes: {
      '/': {
        component: AccountSettings,
      },
    },
  },
  '/in-app': {
    component: InAppMainWrapper,
    subRoutes: {
      '/articles/:id': {
        name: 'inapp_article_detail',
        component: InAppArticleDetail,
      },
      '*': {
        component: InAppError404,
      },
    },
  },
  '*': {
    component: Error404,
  },
};
