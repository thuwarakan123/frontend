import React, { useEffect, useState } from "react";

const EmailList = ({ token }) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/emails", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setEmails(data);
      } catch (error) {
        alert("Failed to fetch emails");
      }
    };

    fetchEmails();
  }, [token]);

//   return (
//     <div className="container">
//       <h2>Inbox</h2>
//       <ul>
//         {emails.map((email) => (
//           <li key={email.id}>
//             <strong>{email.subject}</strong> - {email.sender}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Inbox
      </h2>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
        }}
      >
        {emails.map((email) => (
          <li
            key={email.id}
            style={{
              padding: "15px",
              marginBottom: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <strong style={{ fontSize: "16px", color: "#007bff" }}>
              {email.subject}
            </strong>
            {/* <span style={{ fontSize: "14px", color: "#555" }}>
              {email.sender}
            </span> */}
            <span style={{ fontSize: "14px", color: "#555" }}>
              {email.body}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
