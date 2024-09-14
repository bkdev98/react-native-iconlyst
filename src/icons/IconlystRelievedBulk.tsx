import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRelievedBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.717 2.5H8.282C5.123 2.5 3 4.72 3 8.026v7.947C3 19.279 5.123 21.5 8.282 21.5h8.434c3.16 0 5.284-2.221 5.284-5.527V8.026C22 4.72 19.877 2.5 16.717 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.88 10.005a.748.748 0 0 1-1.051-.14c-.08-.105-.254-.28-.521-.28-.266 0-.441.176-.522.281a.75.75 0 1 1-1.19-.913c.847-1.107 2.582-1.102 3.425.001a.75.75 0 0 1-.141 1.051M12.563 16.62c-1.372 0-2.667-.662-3.553-1.815a.75.75 0 1 1 1.189-.914c.6.781 1.46 1.228 2.364 1.228a.75.75 0 0 1 0 1.5M8.119 10.005a.75.75 0 0 1-.14-1.05c.84-1.104 2.576-1.109 3.423-.002a.75.75 0 1 1-1.19.913c-.08-.105-.255-.28-.52-.28-.268 0-.442.174-.522.28a.747.747 0 0 1-1.051.14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRelievedBulk;
