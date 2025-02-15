const BasicDetails = () => {
  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="input-text" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" name="age" />
      </div>
    </div>
  );
};
export default BasicDetails;
