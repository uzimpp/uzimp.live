import { Title, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { useAge } from "../hooks/useAge";

import styles from "../styles/About.module.scss";
import Projects from "./Projects";

function About() {
  const age = useAge();

  return (
    <>
      <section className="fullflex">
        <div className={styles.container}>
          <div className={styles.section1}>
            <Title size="h0" className="heading">
              About me
            </Title>
            <Text className="desc" size="xl">
              Hi, I’m pat. I’m currently a
              <span className={styles.age}> {age} </span> years old developer
              and a gamer from Thailand. I do web development and actively
              trying to create fun and useful websites and side projects.
            </Text>
          </div>
          <div className={styles.section2}>
            <Title align="center" size="h2" className="heading">
              Notable Projects
            </Title>
            {/* <hr /> */}
            <Projects />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
