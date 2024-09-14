import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumBroken = ({
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
      d="M7.75 8a4 4 0 1 1-3.28 1.709"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.749 16c1.104 0 2-1.79 2-4s-.896-4-2-4-2.001 1.79-2.001 4 .896 4 2 4M20.75 16c.553 0 1-1.79 1-4s-.447-4-1-4-1 1.79-1 4 .448 4 1 4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMediumBroken;
