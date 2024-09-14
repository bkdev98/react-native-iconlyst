import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoldsLight = ({
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
      d="M19.998 20.05h-5.666a1.002 1.002 0 0 1-.984-1.197l.632-3.181c.093-.47.505-.807.983-.807h4.403c.479 0 .89.338.984.807l.63 3.181a1.002 1.002 0 0 1-.982 1.197M9.669 20.05H4.003a1.002 1.002 0 0 1-.984-1.197l.632-3.181c.093-.47.505-.807.983-.807h4.403c.479 0 .89.338.984.807l.63 3.181a1.002 1.002 0 0 1-.982 1.197M14.475 12.447H8.81a1.002 1.002 0 0 1-.984-1.197l.631-3.182c.094-.469.505-.806.983-.806h4.404c.479 0 .89.337.983.806l.63 3.182a1.002 1.002 0 0 1-.982 1.197M3.174 5.606c.786.255 1.402.871 1.657 1.657a2.58 2.58 0 0 1 1.657-1.657A2.58 2.58 0 0 1 4.83 3.95a2.58 2.58 0 0 1-1.657 1.657"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoldsLight;
