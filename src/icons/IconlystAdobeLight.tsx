import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeLight = ({
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
      d="M4 18.149V4.712c0-.147.12-.267.267-.267h5.28c.188 0 .317.19.248.365l-5.28 13.437c-.108.274-.515.197-.515-.098M20 18.149V4.712a.267.267 0 0 0-.267-.267h-5.28a.267.267 0 0 0-.249.365l5.28 13.437c.108.274.516.197.516-.098M11.767 10.721l-2.19 5.406a.267.267 0 0 0 .247.367h2.249c.117 0 .22.076.255.189l.818 2.68a.27.27 0 0 0 .255.189h1.996c.188 0 .317-.19.247-.366l-3.383-8.464a.267.267 0 0 0-.494 0"
    />
  </Svg>
);
export default IconlystAdobeLight;
