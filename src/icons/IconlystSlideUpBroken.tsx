import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideUpBroken = ({
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
      d="M14.24 20.927c-2.5.526-5.581.082-6.87-1.52-1.205-1.5-2.143-3.322-2.735-4.954-.317-.875.149-1.819 1.018-2.153a1.784 1.784 0 0 1 2.108.654l1.168 1.694V5.284a1.633 1.633 0 0 1 3.265-.025l.065 4.224c2.284.218 5.592.1 6.516 2.593.93 2.51.015 5.831-1.614 7.46M19.465 4.199l-1.34-1.34-1.339 1.34M19.465 6.692l-1.34 1.34-1.339-1.34M18.147 2.86v5.078"
    />
  </Svg>
);
export default IconlystSlideUpBroken;
