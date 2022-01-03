import {useToast, Button} from '@chakra-ui/react';

const Notification = ({title, description}) => {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: title,
          description: description,
          status: 'success',
          position: 'top',
          duration: 4000,
          isClosable: true,
        })
      }
    >
      Click me
    </Button>
  );
};

export default Notification;
