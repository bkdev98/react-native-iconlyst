import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Broken = ({
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
      d="m8.537 12.421-.002.003L3.69 7.272A2.55 2.55 0 0 1 3 5.526V4.59C3 3.713 3.701 3 4.565 3h7.436M9.999 16.023v4.572c0 .306.32.5.585.357l2.76-1.504c.416-.228.676-.67.676-1.15v-2.287c0-1.342.519-2.631 1.446-3.587l4.846-5.152c.44-.47.688-1.096.688-1.746V4.59C21 3.713 20.3 3 19.436 3h-3.718"
    />
  </Svg>
);
export default IconlystFilter2Broken;
