import React from "react";

import styles from "../styles/Intro.module.scss";
import { Title, Text, Image, Group } from "@mantine/core";

function Intro() {
  return (
    <>
      <main className="fullflex">
        <section className="container">
          <Group position="apart">
            <div>
              <Title className={styles.intro}>Ahola, my name is</Title>
              <Title className={styles.name} size="h1" color="#82AFD3">
                Boss <span className={styles.subname}>aka uzimp</span>
              </Title>
            </div>
            <div className={styles.pfpimage}>
              <div className={styles.pfpcontainer}>
                <Image
                  style={{ alignItems: "center" }}
                  width={150}
                  height={150}
                  src="/pfp.png"
                  alt="Profile Picture"
                  radius="xl"
                />
              </div>
            </div>
          </Group>

          <Text className={styles.desc} size="xl">
            I’m aiming to be a data analyst or a developer momentarily.
          </Text>
        </section>
      </main>
    </>
  );
}

export default Intro;
