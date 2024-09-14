import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsBoxTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.47 6.308 18.07 7.86c.494.478.772 1.134.772 1.821v8.783c0 1.4-1.136 2.536-2.536 2.536H9.513a2.536 2.536 0 0 1-2.535-2.536V9.681c0-.687.278-1.343.771-1.821l1.602-1.552V4.121C9.35 3.502 9.853 3 10.472 3h4.876c.62 0 1.122.502 1.122 1.12z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.035 18.012h11.748M12.91 10.7v3.47m1.735-1.735h-3.471"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.469 6.309h-7.12"
    />
  </Svg>
);
export default IconlystPillsBoxTwoTone;
