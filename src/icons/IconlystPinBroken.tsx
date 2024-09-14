import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.51 5.889A8.852 8.852 0 0 1 8.413 20.128M5.99 18.41a8.853 8.853 0 0 1 0-12.52"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.647 11.414a4.44 4.44 0 0 1-1.243 3.887 4.464 4.464 0 0 1-6.31 0 4.44 4.44 0 0 1-1.243-3.887M12.249 10.797S8.989 8.58 8.989 6.26a3.26 3.26 0 0 1 6.52 0c0 1.174-.7 2.32-1.46 3.168"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 6.256V6.3m.18-.035a.18.18 0 1 1-.36 0 .18.18 0 0 1 .36 0"
    />
  </Svg>
);
export default IconlystPinBroken;
