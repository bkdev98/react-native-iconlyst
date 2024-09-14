import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnguishedBulk = ({
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
      d="M12.5 2.5C7.262 2.5 3 6.761 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.725 10a.976.976 0 0 1-.692-1.661.978.978 0 0 1 1.668.687.976.976 0 0 1-.976.975M15.369 16.072H9.631c-.276 0-.5-.204-.5-.456 0-1.801 1.512-3.266 3.369-3.266s3.369 1.465 3.369 3.266c0 .252-.224.456-.5.456M8.25 9.026a.97.97 0 0 1 .283-.687.978.978 0 0 1 1.668.687.976.976 0 0 1-1.951 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAnguishedBulk;
