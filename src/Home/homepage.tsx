import React from "react";
import { Link } from "react-router-dom";
//import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Layout = () => {
  
  return (
    <div style={{ padding: "20px", borderRadius: "12px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Container for the whole layout */}

        <div style={{ display: "flex", gap: "10px" }}>
          {/* First Row */}
          <div
            style={{
              flex: "1",
              backgroundColor: "#e0f2fe",
              padding: "20px",
              borderRadius: "8px",
              color: "black",
              overflow: "hidden",
            }}
          >
            <img
              src="https://in.danielwellington.com/cdn/shop/collections/paulabiadacz_1_1_7f0fec07-5449-4332-8abd-aa8dd2bfadbc.jpg?v=1724745090"
              alt="Personal Care"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              flex: "3",
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/529b7e34-6ab6-11ea-9b62-c26870b9ad9f.jpg"
              alt="Vizio TV"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              flex: "1",
              backgroundColor: "#e0f2fe",
              padding: "20px",
              borderRadius: "8px",
              color: "black",
              overflow: "hidden",
            }}
          >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/12/365430631/LB/YJ/FA/6215968/casual-women-shoes.jpg"
              alt="Sports Equipment"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              flex: "1",
              backgroundColor: "#fce4ec",
              padding: "20px",
              borderRadius: "8px",
              color: "black",
              overflow: "hidden",
            }}
          >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/6/317254722/UW/OY/OR/84525815/unsstitled-2-500x500.jpg"
              alt="OLLY Vitamins"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          {/* Second Row */}
          <div
            style={{
              flex: "1",
              backgroundColor: "#f8bbd0",
              padding: "20px",
              borderRadius: "8px",
              color: "black",
              overflow: "hidden",
            }}
          >
            <img
              src="https://www.cato.org/sites/cato.org/files/styles/aside_3x/public/2023-11/fast-fashion2.jpeg?itok=72ek8bxI"
              alt="Fashion"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              flex: "1",
              backgroundColor: "#fff3e0",
              padding: "20px",
              borderRadius: "8px",
              color: "black",
              overflow: "hidden",
            }}
          >
            <img
              src="https://www.ikea.com/in/en/images/products/barlast-table-lamp-black-white__1032423_pe836911_s5.jpg"
              alt="Patio"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              flex: "1",
              backgroundColor: "#e0f7fa",
              padding: "20px",
              borderRadius: "8px",
              color: "black",
              overflow: "hidden",
            }}
          >
            <img
              src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2aaca524-ed9c-48c4-b1f5-1fd8fd307562/tote-bags_hero_D6E1FF2x.png"
              alt="Bag"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              flex: "1",
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "8px",
              color: "black",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2Fnew-osbert-set%2F1-750x650.jpg"
              alt="Tiny Fits"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: "1px solid #ddd", margin: "20px 0" }} />

      {/* About Section */}
      <div
  style={{
    display: "flex",
    justifyContent: "space-around",
    padding: "40px 20px",
    gap: "20px",
  }}
>
  {[
    {
      title: "WHO ARE WE",
      color: "#2e7d32",
      bg: "#c8e6c9",
      text: "Market x connects buyers and sellers worldwide, offering a seamless shopping experience with curated products.",
    },
    {
      title: "WHAT WE OFFER",
      color: "#880e4f",
      bg: "#f8bbd0",
      text: "From handmade crafts to the latest tech gadgets, we provide a diverse range of high-quality products at competitive prices.",
    },
    {
      title: "HOW IT WORKS",
      color: "#1565c0",
      bg: "#bbdefb",
      text: "Buyers can browse and purchase in a few clicks, while sellers can easily list and manage their products.",
    },
    {
      title: "OUR COMMITMENT",
      color: "#e65100",
      bg: "#ffe0b2",
      text: "We are committed to fair trade, eco-friendly packaging, and supporting small businesses globally.",
    },
  ].map((item, index) => (
    <div
      key={index}
      style={{
        backgroundColor: item.bg,
        padding: "30px",
        borderRadius: "12px",
        textAlign: "left",
        flex: "1",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
        e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)"; // Add shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset scale
        e.currentTarget.style.boxShadow = "none"; // Reset shadow
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          fontSize: "1.4em",
          color: item.color,
        }}
      >
        {item.title}
      </h3>
      <p style={{ margin: "10px 0", fontSize: "1em", lineHeight: "1.6" }}>
        {item.text}
      </p>
    </div>
  ))}
</div>

      {/* Trending Categories Section */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>Trending Categories</h2>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            padding: "10px",
          }}
        >
          {[
            {
              name: "Smart Watch",
              image:
                "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEbXg1Q9Dx8zWNDxnj4yUCTNCnICM28veDrsstJ15LJhmIkyWRee9qnyM5eOyW4W9zegF1yVvdfl4m8ibSwt-AnaSBcJKvdyF0_aun1NpQwbeC9gmdfXeL",
              bgColor: "#FFCDD2",
              link: "/products/smart-watch",
            },
            {
              name: "Wireless Earbuds",
              image:
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzJwCRznZWh95VUlSFWbJVtOHpGpGnPiD1jKpmp6WQHfaxM2_rQZhDSS1JVuPrqYPnbHzfTTY6OUi5qrdqKmmNId2jGR5B_93MtTEylyCc52Tgp29XDY_I85w",
              bgColor: "#C8E6C9",
              link: "/products/wireless-earbuds",
            },
            {
              name: "Sneakers",
              image:
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTU0G9NGLq4ZteIQsL5v3miTDLmNiI9KC9ZR3YyY3D8G9cRNCleT8RNQfnCgumMZQqXNzPOtfj35VuwGjs6bAjXlAuKFu0aINub77X_Aurig2zFIvQOI0ZUnw",
              bgColor: "#BBDEFB",
              link: "/products/sneakers",
            },
            {
              name: "Designer Handbag",
              image:
                "https://images.meesho.com/images/products/442519293/xjwgv_1200.jpg",
              bgColor: "#FFECB3",
              link: " ",
            },
            {
              name: "Gaming Headset",
              image:
                "https://whatnot.in/wp-content/uploads/2023/08/61m35lRdcxL._SX679_.jpg",
              bgColor: "#D1C4E9",
              link: "/products/gaming-headset",
            },
            {
              name: "Fitness Tracker",
              image:
                "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1727359929-65adf4ee7807346a1a6545c0-whoop-4-0-with-12-month-subscription-66f56bad32455.jpg?crop=0.894xw:0.894xh;0.0561xw,0.0561xh&resize=980:*",
              bgColor: "#FFAB91",
              link: "/products/fitness-tracker",
            },
          ].map((product, index) => (
            <Link
              key={index}
              to={product.link}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  backgroundColor: product.bgColor,
                  padding: "15px",
                  borderRadius: "8px",
                  textAlign: "center",
                  minWidth: "200px",
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <h4 style={{ margin: "10px 0 5px", fontSize: "1.2em" }}>
                  {product.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div
  style={{
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "black", // Black background
    border: "2px solid white", // White border
    width: "500px",
    margin: "0 auto",
    marginBottom: "40px",
    boxShadow: "0px 5px 15px rgba(255,255,255,0.2)", // Subtle white shadow
  }}
>
  <h2 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>
    Contact Us
  </h2>
  <form
    style={{
      display: "flex",
      flexDirection: "column",
      maxWidth: "600px",
      margin: "0 auto",
      gap: "15px",
    }}
  >
    <input
      type="text"
      placeholder="Your Name"
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid white", // White border
        backgroundColor: "white", // Black background
        color: "black", // White text
      }}
    />
    <input
      type="email"
      placeholder="Your Email"
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid white", // White border
        backgroundColor: "black", // Black background
        color: "white", // White text
      }}
    />
    <textarea
      placeholder="Your Message"
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid white", // White border
        backgroundColor: "white", // Black background
        color: "black", // White text
        minHeight: "100px", // Adjust height for better usability
      }}
    ></textarea>
    <button
      type="submit"
      style={{
        backgroundColor: "white", // White button
        color: "black", // Black text
        padding: "12px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
      }}
    >
      Submit
    </button>
  </form>
</div>

      {/* Footer Section */}
      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "20px",
          position: "relative",
          bottom: "0",
          left: "0",
          width: "auto",
          height: "auto",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Market X. All rights reserved.</p>
        <p>Contact: support@marketx.com</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "10px",
          }}
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5em" }}
          ></a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5em" }}
          ></a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "1.5em" }}
          ></a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
