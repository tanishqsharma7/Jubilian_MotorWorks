import Image from "next/image";

const ChatInbox = () => {
  const contacts = [
    {
      id: 1,
      name: "Darlene Robertson",
      image: "/images/team/ms1.jpg",
      preview: "Head of Development",
      notification: "35 mins",
      hasNotification: false,
      notificationCount: 0,
      status: "",
    },
    {
      id: 2,
      name: "Jane Cooper",
      image: "/images/team/ms2.jpg",
      preview: "Head of Development",
      notification: "35 mins",
      hasNotification: true,
      notificationCount: 2,
      status: "",
    },
    {
      id: 3,
      name: "Jane Cooper",
      image: "/images/team/ms3.jpg",
      preview: "Head of Development",
      notification: "35 mins",
      hasNotification: true,
      notificationCount: 2,
      status: "online",
    },
    {
      id: 4,
      name: "Jane Cooper",
      image: "/images/team/ms4.jpg",
      preview: "Head of Development",
      notification: "35 mins",
      hasNotification: true,
      notificationCount: 2,
      status: "away",
    },
    {
      id: 5,
      name: "Darlene Robertson",
      image: "/images/team/ms5.jpg",
      preview: "Head of Development",
      notification: "35 mins",
      hasNotification: false,
      notificationCount: 0,
      status: "",
    },
    {
      id: 6,
      name: "Darlene Robertson",
      image: "/images/team/ms6.jpg",
      preview: "Head of Development",
      notification: "35 mins",
      hasNotification: true,
      notificationCount: 3,
      status: "busy",
    },
    {
      id: 7,
      name: "Darlene Robertson",
      image: "/images/team/ms7.jpg",
      preview: "Head of Development",
      notification: "35 mins",
      hasNotification: false,
      notificationCount: 0,
      status: "",
    },
    {
      id: 8,
      name: "Darlene Robertson",
      image: "/images/team/ms8.jpg",
      preview: "Head of Development",
      notification: "35 mins",
      hasNotification: false,
      notificationCount: 0,
      status: "",
    },
    // Add more contact objects here...
  ];

  return (
    <ul>
      {contacts.map((contact) => (
        <li className="contact" key={contact.id}>
          <a href="#">
            <div className="wrap">
              <Image
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
                className="img-fluid"
                src={contact.image}
                alt={contact.name}
              />
              <div className="child-wrap df">
                <div className="meta">
                  <h5 className="name">{contact.name}</h5>
                  <p className="preview">{contact.preview}</p>
                </div>
                <div className="iul_notific">
                  <small className="body-color">{contact.notification}</small>
                  {contact.hasNotification && (
                    <div className={`m_notif ${contact.status}`}>
                      {contact.notificationCount}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ChatInbox;
