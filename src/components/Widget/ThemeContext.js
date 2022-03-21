import React from 'react';

const ThemeContext = React.createContext({
  mainColor: '',
  conversationBackgroundColor: '',
  userTextColor: '',
  userBackgroundColor: '',
  assistTextColor: '',
  assistBackgoundColor: '',
  userBackgroundLightColor: ''
});

export default ThemeContext;
