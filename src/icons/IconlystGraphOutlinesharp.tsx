import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphOutlinesharp = ({
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
      d="M9.064 21.837a8.504 8.504 0 0 0 10.162-8.34v-.75h-7.753V4.991h-.75a8.504 8.504 0 0 0-1.66 16.845m4.339-1.87a7.004 7.004 0 1 1-3.43-13.434v7.713h7.713a7 7 0 0 1-4.283 5.72"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.027 11.254h9.254v-.75A8.504 8.504 0 0 0 13.777 2h-.75zm1.5-1.5V3.54a7.004 7.004 0 0 1 6.214 6.214z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphOutlinesharp;
