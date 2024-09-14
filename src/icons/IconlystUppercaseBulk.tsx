import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUppercaseBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m17.386 14.444.628-1.436.628 1.436zm4.53 2.498-2.986-6.83a1 1 0 0 0-1.832 0l-2.986 6.83a1 1 0 0 0 .516 1.316.993.993 0 0 0 1.316-.516l.568-1.298h3.004l.568 1.298a1 1 0 1 0 1.832-.8"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m6.2 12.525 1.478-3.382 1.478 3.381zm5.406.611-.002-.002-3.01-6.89a.998.998 0 0 0-1.832 0L3.755 13.13l-.006.013-1.665 3.813A1 1 0 0 0 2.6 18.27a.993.993 0 0 0 1.316-.517l1.41-3.23h4.704l1.412 3.23a1 1 0 1 0 1.832-.8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUppercaseBulk;
