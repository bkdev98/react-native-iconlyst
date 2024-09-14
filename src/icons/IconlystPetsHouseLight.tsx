import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetsHouseLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 11.087-7.691-6.311a2.06 2.06 0 0 0-2.618 0L3 11.086"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.486 9.863 1.402 8.35a2.49 2.49 0 0 0 2.457 2.08h7.308a2.49 2.49 0 0 0 2.458-2.08l1.402-8.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.841v-.05m-.007-.15a.22.22 0 1 0 .003.439.22.22 0 0 0-.003-.438M15.187 11.461v-.05m-.006-.15a.22.22 0 1 0 .003.439.22.22 0 0 0-.003-.439M8.825 11.461v-.05m-.007-.15a.22.22 0 1 0 .003.439.22.22 0 0 0-.003-.439"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.03 16.335c1.337 0 3.03 1.158 3.007-.624-.01-1.336-1.402-2.59-3.006-2.592-1.614 0-3.217 1.363-2.995 2.753.246 1.61 1.81.463 2.995.463Z"
    />
  </Svg>
);
export default IconlystPetsHouseLight;
