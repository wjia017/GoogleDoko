function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export async function fileToDataUrl(file: File, max = 360) {
  if (!file) throw new Error("Please select an image file");
  const isImage = file.type ? file.type.toLowerCase().startsWith("image/") : /\.(jpe?g|png|webp|gif|avif|bmp|svg)$/i.test(file.name);
  if (!isImage) throw new Error("Please select a JPG, PNG or WebP image");
  if (file.size > 5 * 1024 * 1024) throw new Error("Image must be 5 MB or less");
  const original = await readFileAsDataUrl(file);

  return new Promise<string>((resolve) => {
    const image = new Image();
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const scale = Math.min(1, max / Math.max(image.width || 1, image.height || 1));
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");
        if (!context) {
          resolve(original);
          return;
        }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.75));
      } catch {
        resolve(original);
      }
    };
    image.onerror = () => resolve(original);
    image.src = original;
  });
}

export function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
  };
}

export function isStrongPassword(password: string) {
  return password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);
}

export function cleanPhone(phone: string) {
  return phone.replace(/[\s\-()+]/g, "").replace(/^977/, "");
}

export function isNepalMobile(phone: string) {
  const cleaned = cleanPhone(phone);
  return /^\d{10}$/.test(cleaned);
}
