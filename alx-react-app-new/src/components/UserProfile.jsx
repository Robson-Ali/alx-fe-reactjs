const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue', border: '1px solid black', padding: '10px', margin: '10px' }}>{props.name}</h2>
      <p style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>Bio: {props.bio}</p>
    </div>
  );
};
