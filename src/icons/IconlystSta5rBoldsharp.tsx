import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSta5rBoldsharp = ({
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
      d="M21.674 11.532a15.16 15.16 0 0 1-8.955-8.955l-.47-1.264-.468 1.263a15.15 15.15 0 0 1-8.955 8.956L1.558 12l1.268.468a15.15 15.15 0 0 1 8.955 8.955l.469 1.264.469-1.264a15.15 15.15 0 0 1 8.955-8.955L22.943 12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSta5rBoldsharp;
