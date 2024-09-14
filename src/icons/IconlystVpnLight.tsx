import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVpnLight = ({
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
      d="M4.888 17.5c.23.299.474.59.748.864a9 9 0 0 0 12.728 0c.274-.274.517-.565.748-.864M19.113 6.5a9 9 0 0 0-.748-.864 9 9 0 0 0-12.728 0 9 9 0 0 0-.748.864M4.115 9.637l1.95 4.905 1.948-4.905M10.674 12.682h1.375a1.523 1.523 0 0 0 0-3.045h-1.375v4.872M16.477 14.45V9.826l3.405 4.49v-4.62"
    />
  </Svg>
);
export default IconlystVpnLight;
