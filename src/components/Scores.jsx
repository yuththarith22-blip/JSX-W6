import Statistic from "./Statistic";

function Scores ({ courseName, courseResults }) {
    const scores = courseResults.map((result) => result.score);
    const total = scores.reduce((sum, value) => sum + value, 0);
    const average = Math.round(total / scores.length);
    const min = Math.min(...scores);
    const max = Math.max(...scores);

    return (
        <div className="scores">
            <h1>{courseName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResults.map((result) => (
                        <tr key={`${result.firstName}-${result.lastName}`}>
                            <td>{result.firstName}</td>
                            <td>{result.lastName}</td>
                            <td className={result.score <50 ? "warning" : ""}>{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Statistic average={average} min={min} max={max} />
        </div>
    );
}
export default Scores;
