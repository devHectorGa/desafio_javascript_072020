const INITIAL_STATE = {
  sections: [
    {
      title: 'Home',
      id: 1,
      linkUrl: '/',
      hidden: true,
    },
    {
      title: 'Class',
      id: 2,
      linkUrl: '/app',
      private: true,
    },
    {
      title: 'Profile',
      id: 3,
      linkUrl: '/profile',
      private: true,
      hidden: true,
    },
    {
      title: 'Register',
      id: 4,
      linkUrl: '/register',
      hidden: true,
    },
    {
      title: 'Login',
      id: 5,
      linkUrl: '/login',
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
