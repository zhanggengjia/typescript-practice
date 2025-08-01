import { toast } from 'react-toastify';
import type { Color } from './types/color';

type SingleColorProps = {
  index: number;
  color: Color;
};

const SingleColor = ({ index, color }: SingleColorProps) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (e) {
        toast.error('Failed to copy color to clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
