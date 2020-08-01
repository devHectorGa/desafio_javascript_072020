import HomePage from '../../pages/home/home.component';
import LoginPage from '../../pages/login/login.component';
import AppPage from '../../pages/app/app.component';
import RegisterPage from '../../pages/register/register.component';
import ProfilePage from '../../pages/profile/profile.component';

const INITIAL_STATE = {
  sections: [
    {
      title: 'Home',
      id: 1,
      linkUrl: '/',
      Component: HomePage,
    },
    {
      title: 'Login',
      id: 2,
      linkUrl: '/login',
      Component: LoginPage,
    },
    {
      title: 'Home Chat',
      id: 3,
      linkUrl: '/app',
      private: true,
      Component: AppPage,
    },
    {
      title: 'Register',
      id: 4,
      linkUrl: '/register',
      Component: RegisterPage,
    },
    {
      title: 'profile',
      id: 5,
      linkUrl: '/profile',
      private: true,
      Componen: ProfilePage,
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
