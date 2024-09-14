import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRefresh2Broken = ({
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
      d="M11.477 19.553H7.355C4.753 19.559 3 17.423 3 14.795V8.919c0-2.626 1.753-4.765 4.355-4.765h.711M20.109 10.518v-1.6c0-2.625-1.753-4.764-4.355-4.764h-4.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.602 9.16-3.8 3.091a1.97 1.97 0 0 1-2.447 0l-3.834-3.09M20.006 19.112a2.936 2.936 0 0 1-4.88-2.202M16.121 14.707a2.937 2.937 0 0 1 4.88 2.202"
    />
  </Svg>
);
export default IconlystEmailRefresh2Broken;
