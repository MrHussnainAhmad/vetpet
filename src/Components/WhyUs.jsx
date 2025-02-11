import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupIcon from "@mui/icons-material/Group";
import './CSS/whyus.css';

const whyUsData = [
  { icon: <PetsIcon />, title: "We Love Pets", text: "We cherish pets like family, providing compassionate care to keep your beloved companions healthy and happy." },
  { icon: <AccessTimeIcon />, title: "Convenience", text: "Our clinic offers convenient services with online booking, extended hours, and a central location." },
  { icon: <FavoriteIcon />, title: "Personalized Care", text: "We provide customized care tailored to each pet's unique needs, ensuring their well-being in every visit." },
  { icon: <VerifiedUserIcon />, title: "Peace of Mind", text: "We ensure peace of mind by providing top-quality care and compassion for your beloved pets." },
  { icon: <VisibilityIcon />, title: "Transparency", text: "We offer clear communication, honest care, and full visibility into your pet's health and treatment options." },
  { icon: <GroupIcon />, title: "Teamwork", text: "Our dedicated team collaborates seamlessly to provide the best treatment for your pets." },
];

const WhyUs = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, #14525c, #1a3c40)",
        color: "white",
      }}
    >
      <Typography variant="h3" fontWeight={700} mb={4}>
        Why Rely on Us?
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {whyUsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                textAlign: "center",
                borderRadius: 3,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                color: "white",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.4)",
                },
              }}
            >
              <Box sx={{ fontSize: 50, mb: 2 }}>{item.icon}</Box>
              <Typography variant="h5" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography mt={1}>{item.text}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUs;
