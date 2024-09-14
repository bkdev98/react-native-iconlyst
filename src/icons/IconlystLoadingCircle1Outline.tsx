import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle1Outline = ({
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
      d="M7.05 4.595a.75.75 0 0 1-.087 1.057c-.5.423-.948.899-1.332 1.423a.75.75 0 0 1-1.21-.887 9.8 9.8 0 0 1 1.573-1.681.75.75 0 0 1 1.057.088M3.774 8.823a.75.75 0 0 1 .526.92 8.2 8.2 0 0 0-.274 2.781.75.75 0 1 1-1.496.112 9.7 9.7 0 0 1 .323-3.287.75.75 0 0 1 .921-.526M3.68 14.893a.75.75 0 0 1 .989.384 8.26 8.26 0 0 0 2.86 3.467.75.75 0 1 1-.853 1.234 9.76 9.76 0 0 1-3.38-4.096.75.75 0 0 1 .384-.99M18.404 18.623a.75.75 0 0 1-.128 1.053 9.749 9.749 0 0 1-8.15 1.836.75.75 0 1 1 .33-1.463c.775.174 1.588.24 2.423.178m5.525-1.604a.75.75 0 0 0-1.053-.127zm-1.053-.127a8.2 8.2 0 0 1-4.472 1.73zM11.862 2.257c5.387-.207 9.92 3.992 10.127 9.378a9.67 9.67 0 0 1-1.457 5.484.75.75 0 1 1-1.275-.79 8.17 8.17 0 0 0 1.233-4.637 8.26 8.26 0 0 0-8.57-7.936.75.75 0 0 1-.058-1.499"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingCircle1Outline;
