


// src/app/components/HomePage.jsx
import { styled } from '@mui/material/styles';
import { Button, Container, Typography } from '@mui/material';



export function HomePage() {
  const handleAddLink = () => {
    // Your logic for adding a link
    console.log('Add Link clicked');
  };

  return (
    <HomePageContainer>
      <Typography variant="h2">Welcome to the Link Sharing App!</Typography>
      <Button variant="contained" color="primary" onClick={handleAddLink}>
        Add Link
      </Button>
    </HomePageContainer>
  );
}