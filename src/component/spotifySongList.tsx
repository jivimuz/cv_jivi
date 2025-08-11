export default function SpotifySongList() {
  const tracks = [
    "0mROspyBziPHPyxTPFvKaH",
    "5FVd6KXrgO9B3JPmC8OPst",
    "0ithpOOYIrUDMJCM2K1OQ5",
    "0WSa1sucoNRcEeULlZVQXj",
    "6pAIZfkNBQh4RAiOliPo4t",
    "5kxWBh4jHOdtED9NcXxBvq",
  ];

  return (
    <div className="spotify-grid">
      {tracks.map((id) => (
        <iframe
          key={id}
          src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: "8px" }}
        ></iframe>
      ))}
    </div>
  );
}
