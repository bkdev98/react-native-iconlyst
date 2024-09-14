import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSquareBold = ({
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
      d="M13.932 14.844a.75.75 0 1 1-1.059 1.062L9.482 12.53a.75.75 0 0 1 0-1.063l3.391-3.377a.75.75 0 1 1 1.059 1.063l-2.858 2.845zM16.218 2.5H7.784C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.306 2.124 5.526 5.285 5.526h8.433c3.159 0 5.282-2.22 5.282-5.526V8.026c0-3.305-2.123-5.526-5.282-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftSquareBold;
