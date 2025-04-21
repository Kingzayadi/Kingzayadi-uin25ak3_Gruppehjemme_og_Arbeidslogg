function Logg({ logg }) {
    return (
      <table className="log-table">
        <thead>
          <tr>
            <th>Dato</th>
            <th>Navn</th>
            <th>Oppgave</th>
          </tr>
        </thead>
        <tbody>
          {logg.map((entry, index) => (
            <tr key={index}>
              <td>{entry.dato}</td>
              <td>Sajad Adel Al-Zayadi</td>
              <td>{entry.tekst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Logg;
  