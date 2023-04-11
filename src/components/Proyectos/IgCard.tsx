export function InstagramCard({ textPublicacion, source }: any) {
  return (
    <a href="https://www.instagram.com/juanjosecubidesmonje/"
    target="_blank"
    rel="noreferrer"
    style={{
      textDecoration: "none",
      listStyle: "none",
      color: "#1fd1f2",
    }}
    >
    <div
      style={{
        maxWidth: "380px",
        margin: "0 auto",
        border: "1px solid #dbdbdb",
        borderRadius: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
        <a href="">
          <span style={{ fontWeight: "bold" }}>Juan José Cubides Monje</span>
        </a>
      </div>
      <img
        src={source}
        alt="Post"
        style={{ maxWidth: "360px", height: "340px", borderRadius: "20px" }}
      />
      <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
        <i className="fas fa-heart" style={{ marginRight: "16px" }} />
        <i className="fas fa-comment" style={{ marginRight: "16px" }} />
        <i className="fas fa-share" />
      </div>
      <div style={{ padding: "0 16px 16px" }}>
        {/*<span style={{ fontWeight: "bold" }}>
            Liked by username and others
          </span>*/}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
        >
          {/*<span
            style={{ fontWeight: "bold", marginRight: "8px", color: "#1da1f2" }}
          >
            #unanuevamaneradeservir
          </span>*/}
          <span>{textPublicacion}</span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
        >
          {/* <span style={{ fontWeight: "bold", marginRight: "8px" }}>
              Username
            </span>*/}
          {/*<span>Another comment</span>*/}
        </div>
        <a
          href="https://www.instagram.com/juanjosecubidesmonje/"
          target="_blank"
        >
          <div style={{ marginTop: "8px" }}>
            <input
              type="text"
              placeholder="Add a comment..."
              style={{
                border: "none",
                width: "100%",
                outline: "none",
                padding: "8px",
              }}
            />
          </div>
        </a>
      </div>
    </div>
    </a>
  );
}
