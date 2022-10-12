const Errors = ({ errors }) => {
  return (
    <ul>
      {errors.map((eroros, i) => (
        <li style={{ color: 'red', listStyle: 'none' }} key={i}>
          {eroros}
        </li>
      ))}
    </ul>
  );
};
export default Errors;
