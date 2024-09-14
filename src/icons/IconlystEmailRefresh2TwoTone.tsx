import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRefresh2TwoTone = ({
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
      d="M20.609 10.518v-1.6c0-2.625-1.754-4.764-4.355-4.764H7.855C5.253 4.154 3.5 6.293 3.5 8.92v5.876c0 2.628 1.753 4.764 4.355 4.757h4.121"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.102 9.16-3.8 3.091a1.97 1.97 0 0 1-2.447 0l-3.834-3.09M20.506 19.112a2.936 2.936 0 0 1-4.88-2.202M16.621 14.707a2.937 2.937 0 0 1 4.88 2.202"
    />
  </Svg>
);
export default IconlystEmailRefresh2TwoTone;
