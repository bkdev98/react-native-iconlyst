import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartCircleBold = ({
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
      d="M10.494 9.7a1.8 1.8 0 0 1 .831-.048c.201.031.49.24.736.42l.008.006c.267.195.632.19.897-.01.175-.134.503-.384.73-.425q.439-.07.811.052c1.081.35 1.341 1.546 1.038 2.495-.49 1.485-2.302 2.605-3.038 3.008-.92-.497-2.609-1.644-3.034-3.006-.305-.948-.043-2.145 1.021-2.491"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3 12c0-5.238 4.262-9.5 9.5-9.5S22 6.762 22 12s-4.262 9.5-9.5 9.5S3 17.238 3 12m9.194 4.72a.74.74 0 0 0 .634 0c.136-.064 3.325-1.576 4.142-4.065l.001-.003.001-.002c.608-1.895-.27-3.82-2.003-4.382a3.25 3.25 0 0 0-1.523-.105c-.35.064-.662.216-.939.393-.275-.174-.586-.328-.932-.383a3.3 3.3 0 0 0-1.525.095c-1.732.562-2.614 2.487-2.007 4.377.774 2.477 4.013 4.01 4.151 4.076"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartCircleBold;
