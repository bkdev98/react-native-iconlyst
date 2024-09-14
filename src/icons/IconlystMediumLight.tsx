import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumLight = ({
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
      d="M7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M14.999 16c1.104 0 2-1.79 2-4s-.896-4-2-4-2.001 1.79-2.001 4 .896 4 2 4M20 16c.553 0 1-1.79 1-4s-.447-4-1-4-1 1.79-1 4 .448 4 1 4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMediumLight;
