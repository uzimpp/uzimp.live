import React from "react";
import styles from "../styles/Contacts.module.scss";

import { IconBrandGithub, IconBrandTwitter, IconMail } from "@tabler/icons";
import { ActionIcon, Group } from "@mantine/core";

function Contacts() {
  return (
    <>
      <nav className={styles.container}>
        <Group spacing="xs">
          <ActionIcon
            variant="filled"
            size={40}
            component="a"
            href="https://github.com/uzimpp"
            target="_blank"
          >
            <IconBrandGithub size={32} />
          </ActionIcon>
          
          <ActionIcon
            variant="filled"
            size={40}
            component="a"
            href="https://github.com/uzimpp"
            target="_blank"
            color="purple"
          >
            <IconBrandGithub size={32} />
          </ActionIcon>

          <ActionIcon
            variant="filled"
            size={40}
            component="a"
            href="https://instagram.com/ssoq.b?igshid=MmIzYWVlNDQ5Yg=="
            target="_blank"
            color="pink"
          >
            <IconBrandTwitter size={32} />
          </ActionIcon>

          <ActionIcon
            variant="filled"
            size={40}
            component="a"
            href="mailto:worrakit.boss@gmail.com"
            target="_blank"
            color="red"
          >
            <IconMail size={32} />
          </ActionIcon>
        </Group>
      </nav>
    </>
  );
}

export default Contacts;
