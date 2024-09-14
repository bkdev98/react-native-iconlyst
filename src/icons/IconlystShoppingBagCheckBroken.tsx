import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagCheckBroken = ({
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
      d="M12.02 20.706H7.626C4.773 20.706 3 18.693 3 15.844V12M20.412 12.078V8.155c0-2.849-1.775-4.862-4.627-4.862H7.626C4.783 3.293 3 5.306 3 8.155"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.168 8.924a3.462 3.462 0 1 1-6.926 0M15.213 18.765l1.93 1.928 3.856-3.857"
    />
  </Svg>
);
export default IconlystShoppingBagCheckBroken;
