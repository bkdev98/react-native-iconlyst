import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSushiSwapTwoTone = ({
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
      d="M12.332 12.832c3.84 2.544 7.912 3.16 9.094 1.376s-.974-5.293-4.814-7.837c-3.841-2.544-7.913-3.16-9.095-1.376-1.181 1.784.974 5.293 4.815 7.837"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.426 14.209-3.443 4.797c-1.181 1.784-5.253 1.168-9.094-1.376-3.842-2.544-5.997-6.053-4.816-7.837l3.444-4.797"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.81 15.005c.59-.582.78-.805 1.518-1.174 1.037-.518 2.135-.308 2.907.546.808.894 1.447 2.453 2.912 2.293 1.201-.132 2.09-1.225 2.933-1.977"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.899 11.254c-.302.456-1.642.1-2.995-.796-1.352-.897-2.203-1.991-1.902-2.447.302-.456 1.643-.1 2.995.796 1.352.897 2.204 1.991 1.902 2.447"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSushiSwapTwoTone;
