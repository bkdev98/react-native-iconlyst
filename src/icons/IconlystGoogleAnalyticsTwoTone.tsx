import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAnalyticsTwoTone = ({
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
      strokeWidth={1.5}
      d="M3 18.78a2.111 2.111 0 1 1 4.223 0 2.111 2.111 0 0 1-4.223 0ZM16.777 6.111a2.111 2.111 0 0 1 4.223 0V18.78a2.111 2.111 0 0 1-4.223 0z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M9.697 12.252a2.111 2.111 0 0 1 4.223 0v6.526a2.111 2.111 0 1 1-4.223 0z"
    />
  </Svg>
);
export default IconlystGoogleAnalyticsTwoTone;
