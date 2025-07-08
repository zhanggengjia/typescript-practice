import { nanoid } from 'nanoid';
import type { Color } from './types/color';
import SingleColor from './SingleColor';

type ColorsProp = {
  colors: Color[];
};

const ColorList = ({ colors }: ColorsProp) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor color={color} index={index} key={nanoid()} />;
      })}
    </section>
  );
};

export default ColorList;
