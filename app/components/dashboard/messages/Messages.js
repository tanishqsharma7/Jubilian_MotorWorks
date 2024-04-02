import Image from "next/image";

const Messages = () => {
  const messages = [
    {
      sender: "Albert Flores",
      text: "How likely are you to recommend our company to your friends and family?",
      time: "35 mins",
    },
    {
      sender: "You",
      text: "Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.",
      time: "35 mins",
    },
    {
      sender: "Albert Flores",
      text: "Ok, Understood!",
      time: "35 mins",
    },
    {
      sender: "You",
      text: "The project finally complete! Let`&apos;s go to!.",
      time: "35 mins",
    },
    {
      sender: "Albert Flores",
      text: "Let`&apos;s go!",
      time: "35 mins",
    },
  ];

  return (
    <>
      {messages.map((message) => (
        <li
          key={message.id}
          className={message.sender === "You" ? "sent" : "reply"}
        >
          <div className="df">
            <Image
              width={50}
              height={50}
              className="img-fluid align-self-start me-3"
              src={
                message.sender === "You"
                  ? "/images/team/mm3.jpg"
                  : "/images/team/mm2.jpg"
              }
              alt={message.sender}
            />
            <h5 className="title">
              {message.sender}{" "}
              <small className="body-color">{message.time}</small>
            </h5>
          </div>
          <p>{message.text}</p>
        </li>
      ))}
    </>
  );
};

export default Messages;
