import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.604a8.5 8.5 0 0 0-8.5 8.5 8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-8.5-8.5m-10 8.5c0-5.523 4.477-10 10-10s10 4.477 10 10-4.478 10-10 10-10-4.477-10-10"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.914 8.872 16.57 13.1l-6.656 4.227zm1.5 2.73v2.995l2.358-1.498z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayOutlinesharp;
