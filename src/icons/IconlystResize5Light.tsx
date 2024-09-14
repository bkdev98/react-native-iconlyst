import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize5Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.002 5 4.003 4.003M5.002 5l.008 3.677M5.002 5l3.677.008M5 18.998l4.003-4.002m-.325 3.995L5 18.999l.008-3.677M18.999 18.998l-4.003-4.002M19 18.998l-.008-3.677m.008 3.677-3.677-.009M19 5l-4.002 4.002m.324-3.994L19 5l-.008 3.677"
    />
  </Svg>
);
export default IconlystResize5Light;
