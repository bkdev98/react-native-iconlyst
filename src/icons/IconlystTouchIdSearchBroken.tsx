import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSearchBroken = ({
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
      d="M4.556 15.184a7 7 0 0 1-.054-.847V9.652a6.64 6.64 0 0 1 3.48-5.843M11.147 3.008a6.644 6.644 0 0 1 6.644 6.644M11.146 6.703a3.44 3.44 0 0 0-3.437 3.437v.937M7.709 13.875a3.43 3.43 0 0 0 1.329 2.714M11.147 11.956v-1.91M14.58 10.143a3.42 3.42 0 0 0-.91-2.33M11.148 21.009a6.64 6.64 0 0 1-5.638-3.126M18.421 18.712l1.577 1.574m-3.71-7.005a3.134 3.134 0 1 1 0 6.268 3.134 3.134 0 0 1 0-6.268"
    />
  </Svg>
);
export default IconlystTouchIdSearchBroken;
