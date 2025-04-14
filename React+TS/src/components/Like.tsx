import { useState } from "react";

const Like = () => {
  // Membuat state liked dengan nilai awal false
  const [liked, setLiked] = useState<boolean>(false);

  // Fungsi untuk toggle nilai liked antara true dan false
  const handleToggleLike = () => {
    setLiked(!liked); // Membalik nilai sebelumnya
  };

  return (
    <div>
      <button
        onClick={handleToggleLike}
        style={{
          padding: "8px 16px",
          // Conditional styling berdasarkan state liked
          backgroundColor: liked ? "#3b82f6" : "#e5e7eb", // Biru jika liked, abu-abu jika tidak
          color: liked ? "white" : "#1f2937", // Teks putih jika liked
        }}
      >
        {/* Teks tombol berubah berdasarkan state liked */}
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

export default Like;
