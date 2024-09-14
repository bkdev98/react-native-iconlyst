import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeRightBroken = ({
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
      d="M14.276 20.791c-2.567.529-5.714.069-7.034-1.572-1.243-1.545-2.208-3.42-2.817-5.101-.326-.901.153-1.872 1.048-2.215a1.836 1.836 0 0 1 2.17.672l1.202 1.745V4.68a1.68 1.68 0 0 1 3.36-.026l.068 4.348c2.352.225 5.757.103 6.708 2.67.957 2.583.015 6.002-1.662 7.679M18.194 3.531l1.483 1.482-1.483 1.483M19.676 5.012h-4.765"
    />
  </Svg>
);
export default IconlystSwipeRightBroken;
