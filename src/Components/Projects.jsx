import styles from "./Projects.module.css";

import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";

export default function Projects() {
  return (
    <div className={styles.projectsSection}>
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          <Project />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </div>
  );
}
