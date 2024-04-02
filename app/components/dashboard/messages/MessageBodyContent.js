import Image from "next/image";
import Messages from "./Messages";

const MessageBodyContent = () => {
  return (
    <div className="message_container mt30-md">
      <div className="user_heading d-flex aling-items-center justify-content-between">
        <div className="wrap d-flex align-items-center">
          <Image
            width={50}
            height={50}
            style={{ objectFit: "cover" }}
            className="img-fluid mr10"
            src="/images/team/mm1.jpg"
            alt="mm1.jpg"
          />
          <div className="meta">
            <h5 className="name">Arlene McCoy</h5>
            <p className="preview">Active</p>
          </div>
        </div>
        <a className="text-thm3 tdu float-end fz14" href="#">
          Delete Conversation
        </a>
      </div>
      {/* End uer header */}

      <div className="inbox_chatting_box">
        <ul className="chatting_content">
          <Messages />
        </ul>
      </div>
      {/* End .inbox_chatting_box */}

      <div className="mi_text">
        <div className="message_input">
          <form className="row-cols-lg-auto g-3 align-items-center">
            <input
              className="form-control"
              type="search"
              placeholder="Type a Message"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageBodyContent;
