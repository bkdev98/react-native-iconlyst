import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorTriangleBulk = ({
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
      d="M21.17 16.873 14.21 4.657a2.47 2.47 0 0 0-2.162-1.259h-.005c-.9 0-1.708.467-2.158 1.248L2.837 16.861a2.47 2.47 0 0 0 0 2.493A2.47 2.47 0 0 0 4.994 20.6h14.008c.9 0 1.704-.463 2.156-1.24a2.47 2.47 0 0 0 .011-2.487"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.761 13.284a.75.75 0 0 1-1.5 0V10.27a.75.75 0 0 1 1.5 0zm-.752 3.77c-.414 0-.75-.311-.75-.726v-.049a.75.75 0 0 1 1.5 0c0 .415-.336.776-.75.776"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorTriangleBulk;
