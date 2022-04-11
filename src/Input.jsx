export default function Input({ value, onChange, onClick }) {
  function handleChange(event) {
    const { value: inputTitle } = event.target;
    onChange(inputTitle);
  }

  return (
    <p>
      <label htmlFor="input-task-title">
        할 일
      </label>
      <input
        id="input-task-title"
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={value}
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </p>
  );
}
