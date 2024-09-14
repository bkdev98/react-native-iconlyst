import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableKeyboradBroken = ({
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
      d="M8.451 2.992a1.25 1.25 0 0 0 1.263 1.239h.976a1.94 1.94 0 0 1 1.954 1.914v.622M16.729 20.984c2.937 0 4.771-1.643 4.771-4.663v-4.8c0-3.066-1.834-4.748-4.771-4.748H8.27c-2.947 0-4.771 1.653-4.771 4.673v4.875c-.01 3.02 1.816 4.663 4.762 4.663h4.233M15.323 17.273H9.678"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.37 10.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M14.202 10.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M10.788 10.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M17.62 10.741v-.022m0-.117a.116.116 0 1 0 0 .232.116.116 0 0 0 0-.232M12.495 13.62v-.022m0-.118a.116.116 0 1 0 0 .233.116.116 0 0 0 0-.232M9.079 13.62v-.022m0-.118a.116.116 0 1 0 0 .233.116.116 0 0 0 0-.232M15.911 13.62v-.022m0-.118a.116.116 0 1 0 0 .233.116.116 0 0 0 0-.232"
    />
  </Svg>
);
export default IconlystCableKeyboradBroken;
