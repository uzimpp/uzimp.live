import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Title } from "@mantine/core";
import styled from "styled-components";

import projects from "../../contents/projects.json";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  justify-content: center;
`;

function Projects() {
  return (
    <Container>
      <Carousel
        sx={{ maxWidth: "24rem" }}
        slideSize="90%"
        slideGap="sm"
        height={300}
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
