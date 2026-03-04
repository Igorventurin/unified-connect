const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5562982300168?text=Olá! Gostaria de saber mais sobre a Zeeps."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 50,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.65)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.5)";
      }}
    >
      {/* Official WhatsApp SVG logo (phone inside bubble, white) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="white"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 14.998c0 2.162.578 4.19 1.586 5.94L4 29l8.32-2.176A12.04 12.04 0 0 0 16.004 27C22.63 27 28 21.624 28 14.998 28 8.373 22.63 3 16.004 3zm0 2.003c5.516 0 9.994 4.476 9.994 9.995 0 5.52-4.478 9.999-9.994 9.999a9.96 9.96 0 0 1-5.118-1.413l-.366-.218-3.794.994.998-3.699-.238-.38A9.96 9.96 0 0 1 5.997 15c0-5.519 4.48-9.997 10.007-9.997zm-3.37 4.987c-.2 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.094 3.197 5.075 4.484.71.306 1.262.49 1.694.626.712.227 1.36.195 1.87.118.572-.085 1.758-.719 2.007-1.413.248-.693.248-1.288.173-1.413-.074-.123-.272-.198-.569-.347-.298-.149-1.76-.867-2.032-.967-.273-.099-.47-.148-.67.15-.197.298-.767.967-.94 1.165-.174.199-.347.224-.645.075-.297-.15-1.255-.462-2.39-1.473-.882-.788-1.47-1.762-1.644-2.06-.174-.297-.018-.458.131-.606.133-.134.297-.347.446-.52.147-.174.197-.298.296-.497.099-.198.05-.372-.025-.52-.074-.149-.666-1.611-.916-2.206-.242-.58-.488-.5-.67-.51l-.57-.01z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
