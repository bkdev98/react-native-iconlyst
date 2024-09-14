import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBirdHouseLight = ({
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
      d="m4.487 9.863 2.402 8.35a2.49 2.49 0 0 0 2.457 2.08h5.308a2.49 2.49 0 0 0 2.458-2.08l2.402-8.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13.228a2.312 2.312 0 1 0 0-4.625 2.312 2.312 0 0 0 0 4.624M12.005 16.566v-.046m-.006-.138a.203.203 0 1 0 .002.404.203.203 0 0 0-.002-.404"
    />
  </Svg>
);
export default IconlystBirdHouseLight;
