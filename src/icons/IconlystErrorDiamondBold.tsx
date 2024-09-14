import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorDiamondBold = ({
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
      d="M12.757 12a.75.75 0 0 1-1.5 0V8.4a.75.75 0 0 1 1.5 0zm-.75 4.185c-.414 0-.75-.305-.75-.719v-.063a.75.75 0 0 1 1.5 0c0 .414-.336.782-.75.782m8.118-7.35-4.958-4.958c-1.893-1.893-4.493-1.835-6.474.143L4.021 8.691c-1.977 1.98-2.035 4.581-.143 6.475l4.958 4.958c.922.922 2.012 1.381 3.116 1.381 1.164 0 2.343-.51 3.358-1.525l4.672-4.67c.951-.953 1.476-2.066 1.517-3.22.042-1.189-.433-2.315-1.374-3.255"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorDiamondBold;
