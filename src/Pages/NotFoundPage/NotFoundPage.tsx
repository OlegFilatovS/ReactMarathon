import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <Button color="yellow" onClick={() => navigate('/')}>
      Return
    </Button>
  );
};

export default NotFoundPage;
