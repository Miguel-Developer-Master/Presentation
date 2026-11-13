export function encodeMessage(phone, message) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}