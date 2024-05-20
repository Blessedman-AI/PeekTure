import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPostDate(dateString: string): string {
  const postDate = new Date(dateString);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - postDate.getTime();
  const diffInMinutes = diffInMilliseconds / 1000 / 60;

  if (diffInMinutes < 2) {
    return 'just now';
  } else if (diffInMinutes < 60) {
    const minutes = Math.floor(diffInMinutes);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (diffInMinutes < 24 * 60) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diffInMinutes / 60 / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
