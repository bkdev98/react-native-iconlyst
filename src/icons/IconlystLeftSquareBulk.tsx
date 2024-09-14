import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSquareBulk = ({
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
      d="M16.218 21.5H7.784c-3.161 0-5.284-2.221-5.284-5.526V8.026C2.5 4.72 4.624 2.5 7.785 2.5h8.433c3.159 0 5.282 2.22 5.282 5.526v7.948c0 3.305-2.123 5.526-5.282 5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.932 9.156a.75.75 0 1 0-1.06-1.062l-3.39 3.376a.75.75 0 0 0 0 1.063l3.39 3.377a.75.75 0 1 0 1.06-1.063l-2.858-2.845z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftSquareBulk;
