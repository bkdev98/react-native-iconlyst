import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpSquareBold = ({
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
      d="M9.156 13.932a.75.75 0 1 1-1.062-1.059l3.376-3.391a.75.75 0 0 1 1.063 0l3.377 3.391a.75.75 0 1 1-1.063 1.059l-2.845-2.858zM21.5 16.218V7.784c0-3.161-2.221-5.284-5.526-5.284H8.026C4.72 2.5 2.5 4.624 2.5 7.785v8.433c0 3.159 2.22 5.282 5.526 5.282h7.948c3.305 0 5.526-2.123 5.526-5.282"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpSquareBold;
