import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Title } from "@mantine/core";
import styled from "styled-components";

import projects from "../../contents/projects.json";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  width: 125%; /* Increase the width to 125% */
  justify-content: center;
`;

function Projects() {
  return (
    <Container>
      <Carousel
        sx={{ maxWidth: "30rem" }}
        slideSize="112.5%"
        slideGap="md"
        height={375}
        withControls={false}
        withIndicators
      >
        {projects.map((project) => (
          <Carousel.Slide key={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              url={project.url}
              github={project.github}
              imageURL={project.imageURL}
              status={project.status}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}

export default Projects;
