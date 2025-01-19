"use client";

function FbpixelButton({ children, contentName, value, id }) {
  function handleClick() {
    fbq("track", id, {
      content_name: contentName,
      value: value,
    });
  }
  return (
    <button onClick={handleClick} id={id} className="w-fit h-auto">
      {children}
      <span className="sr-only">{contentName}</span>
    </button>
  );
}

export { FbpixelButton };
