import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';
// import { Container } from './styles';
import Background from '~/components/Background';

const barIcon = ({ tintColor }) => (
  <Icon name="event" size={20} color={tintColor} />
);

export default function Profile() {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: barIcon,
};

barIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
