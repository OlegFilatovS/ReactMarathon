import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <Button color="yellow" onClick={() => navigate(LinkEnum.HOME)}>
      Return
    </Button>
  );
};

export default NotFoundPage;
