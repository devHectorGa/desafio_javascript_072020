const INITIAL_STATE = {
  sections: [
    {
      title: 'Home',
      id: 1,
      linkUrl: '/',
    },
    {
      title: 'Login',
      id: 2,
      linkUrl: 'login',
    },
    {
      title: 'Home Chat',
      id: 3,
      linkUrl: 'app',
    },
    {
      title: 'Register',
      id: 4,
      linkUrl: 'register',
    },
    {
      title: 'profile',
      id: 5,
      linkUrl: 'profile',
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
