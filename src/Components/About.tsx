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
            <Title size="h1" className="heading">
              About me
            </Title>
            <Text className="desc" size="xl">
              Ahola, my name is Boss, an average orange cats lover from Thailand.
              I’m crazy about cats, games, instrumental music and self-improvement.
              Also, I'm a totally introverted person. Nice to meet you all <3
            </Text>
          </div>
          <div className={styles.section2}>
            <Title align="center" size="h2" className="heading">
              Projects
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
