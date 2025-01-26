import {
  Delete,
  Add,
  Edit,
  Favorite,
  Navigation,
  Mood,
  SentimentDissatisfied,
  MoodBad,
  SentimentVeryDissatisfied,
  Image,
  VideoCall,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  //   justifyContent: "center",
  gap: "10px",
  marginBottom: "20px",
});

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography color="grey" textAlign={"center"} variant="h6">
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={4}
            placeholder="what's on your mind"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <Mood color="primary" />
            <Image color="secondary" />
            <VideoCall color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            fullWidth
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};

export default AddPost;
