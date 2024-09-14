import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse4Light = ({
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
      d="M18.696 14.703C18.696 18.18 15.698 21 12 21s-6.695-2.818-6.695-6.294l-.002-5.409C5.302 5.82 8.299 3 11.999 3c3.696 0 6.694 2.818 6.695 6.295zM18.697 10.172H5.305M12 3.012v7.162"
    />
  </Svg>
);
export default IconlystMouse4Light;
