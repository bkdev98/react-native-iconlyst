import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnspashTwoTone = ({
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
      d="M15.111 11.998v2.611c0 .491-.398.89-.889.89H9.778a.89.89 0 0 1-.89-.89V12a.89.89 0 0 0-.888-.89H4.889A.89.89 0 0 0 4 12v7.11c0 .491.398.89.889.89H19.11c.491 0 .889-.399.889-.89V12a.89.89 0 0 0-.889-.89H16a.89.89 0 0 0-.889.89"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Rect
      width={6.222}
      height={4.444}
      x={8.889}
      y={4}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={1}
    />
  </Svg>
);
export default IconlystUnspashTwoTone;
