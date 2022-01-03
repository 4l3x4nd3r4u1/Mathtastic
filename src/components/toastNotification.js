import {useToast } from '@chakra-ui/react';

const Notification = ({title, description}) => {
  const toast = useToast();

  return (
    <>
      {
        toast({
          title: title,
          description: description,
          status: 'success',
          position: 'top',
          isClosable: true,
        })
      }
    </>
  );
};

export default Notification;
