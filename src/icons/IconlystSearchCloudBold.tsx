import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCloudBold = ({
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
      d="M14.297 11.651c0 .4-.23.76-.55.91-.23.09-.41.1-.46.1h-4.19a1.001 1.001 0 0 1-1-1.01c0-.95.77-1.03 1.01-1.03.41 0 .74-.34.74-.75 0-.26.24-1.35 1.35-1.35s1.35 1.09 1.35 1.35c0 .41.33.75.74.75.49.01 1.01.28 1.01 1.03"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.317 13.951c-.36.14-.71.21-1.03.21h-4.19c-.33 0-.68-.08-1-.21-.92-.41-1.5-1.31-1.5-2.3 0-1.22.74-2.17 1.84-2.45.28-1.04 1.17-2.18 2.76-2.18s2.48 1.14 2.76 2.18c1.1.28 1.84 1.23 1.84 2.45 0 .98-.58 1.88-1.48 2.3m-3.19-11.45c-4.65 0-8.41 3.77-8.41 8.42s3.76 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84M20.99 19.79l-1.983-1.978a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCloudBold;
