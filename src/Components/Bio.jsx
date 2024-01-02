import styles from "./Bio.module.css";

export default function Bio() {
  return (
    <div className={styles.bio}>
      <div className={styles.profileImg}></div>
      <div className={styles.profileText}>
        <h3>Über mich:</h3>
        <p>
          Ich bin Asal Ghabeljoo, 25 Jahre alt und komme aus dem Iran. Als
          aufstrebende Person im Bereich Programmierung und Design bringe ich
          ein fundiertes Verständnis des Designprozesses sowie eine wachsende
          Leidenschaft für das Programmieren mit. Proficient in HTML/CSS und
          versiert in UI/UX-Prinzipien, vertiefe ich aktiv meine Fähigkeiten im
          Webdesign. Mein kürzlich abgeschlossener Front-End Career
          Specialization-Kurs bei Meta hat mir praktische Erfahrungen im Bereich
          Webdesign und Frameworks vermittelt. Mit Begeisterung für die aktive
          Mitgestaltung und dem festen Willen zur kontinuierlichen
          Weiterentwicklung durch die Informatik Ausbildung, biete ich eine
          aufstrebende Perspektive, angereichert mit Kreativität und
          unerschütterlicher Neugier für die sich stetig entwickelnde
          Technologielandschaft.
        </p>
      </div>
    </div>
  );
}
