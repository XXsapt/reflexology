import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Target: Jumat 15 Mei 2026 jam 24:00 (sama dengan 15 Mei 23:59:59)
    const targetDate = new Date('2026-05-15T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return true; 
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const h = hours.toString().padStart(2, '0');
      const m = minutes.toString().padStart(2, '0');
      const s = seconds.toString().padStart(2, '0');
      
      if (days > 0) {
        setTimeLeft(`${days}d ${h}:${m}:${s}`);
      } else {
        setTimeLeft(`${h}:${m}:${s}`);
      }
      return false;
    };

    const isDone = updateCountdown();
    if (!isDone) {
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  if (isExpired) {
    return (
      <div className="punishment-emote">
        🙏
      </div>
    );
  }

  // Mencegah hydration mismatch error (karena server dan client bisa beda waktu)
  if (!timeLeft) return null;

  return (
    <div className="countdown-timer">
      {timeLeft}
    </div>
  );
}
