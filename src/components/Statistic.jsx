function Statistic({ average, min, max }) {
  return (
    <div className="statistic">
      <div>
        <span>Average</span>
        <p>{average}</p>
      </div>
      <div>
        <span>Min</span>
        <p>{min}</p>
      </div>
      <div>
        <span>Max</span>
        <p>{max}</p>
      </div>
    </div>
  );
}

export default Statistic;