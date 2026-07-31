"use client";

import { FaWhatsapp, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

export function ShareButtons() {
  const share = (platform: "whatsapp" | "linkedin" | "facebook") => {
    const url = encodeURIComponent(window.location.href);

    let shareUrl = "";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${url}`;
        break;

      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;

      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copiado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Não foi possível copiar o link.");
    }
  };

  const buttonStyle =
    "flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md";

  return (
    <section className="mt-16 border-t border-slate-200 pt-10">
      <h3 className="text-xl font-semibold text-slate-900">
        Compartilhe este artigo
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Gostou deste conteúdo? Compartilhe com outras pessoas.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => share("whatsapp")}
          className={buttonStyle}
        >
          <FaWhatsapp className="text-green-500" size={18} />
          WhatsApp
        </button>

        <button
          onClick={() => share("linkedin")}
          className={buttonStyle}
        >
          <FaLinkedin className="text-blue-700" size={18} />
          LinkedIn
        </button>

        <button
          onClick={() => share("facebook")}
          className={buttonStyle}
        >
          <FaFacebookF className="text-blue-600" size={18} />
          Facebook
        </button>

        <button
          onClick={copyLink}
          className={buttonStyle}
        >
          <LuLink size={18} />
          Copiar link
        </button>
      </div>
    </section>
  );
}