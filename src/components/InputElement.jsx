export function InputElement({ label, type, onChange, name, value, placeholder }) {
    return (
      <label>
        <div className="label">{label}</div>
        <input className="input"
          type={type}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          value={value} />
      </label>
    );
  }
  