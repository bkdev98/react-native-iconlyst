import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.565 3C3.701 3 3 3.713 3 4.59v.936c0 .65.247 1.276.69 1.746l4.845 5.152.002-.003A5.16 5.16 0 0 1 10 16.023v4.572c0 .306.32.5.585.357l2.76-1.504c.416-.228.676-.67.676-1.15v-2.287c0-1.342.519-2.631 1.446-3.587l4.846-5.152c.44-.47.688-1.096.688-1.746V4.59C21 3.713 20.3 3 19.436 3z"
    />
  </Svg>
);
export default IconlystFilter2Light;
