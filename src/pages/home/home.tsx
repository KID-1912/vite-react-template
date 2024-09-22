import { Layout } from "antd";
import LayoutIndex from "@/layouts/layout.tsx";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <LayoutIndex>
        <Layout.Content className={styles["home-content"]}></Layout.Content>
      </LayoutIndex>
    </>
  );
}
