import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsBold = ({
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
      d="M16.405 3.578a.917.917 0 0 0-.917.917v3.06h-3.096a.917.917 0 0 0-.917.918v3.193H8.38a.917.917 0 0 0-.917.917v2.995H4.417a.917.917 0 0 0-.917.917v3.01c0 .507.41.918.917.918h15.166c.507 0 .917-.41.917-.917V4.496a.917.917 0 0 0-.917-.918z"
    />
  </Svg>
);
export default IconlystStairsBold;
