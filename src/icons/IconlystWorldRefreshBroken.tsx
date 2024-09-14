import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldRefreshBroken = ({
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
      d="M11.369 20.842a8.934 8.934 0 0 1-8.206-8.912 8.92 8.92 0 0 1 3.74-7.267M12.094 3c4.563 0 8.316 3.42 8.856 7.834"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.402 11.02a20 20 0 0 0-.195-2.193C14.742 5.425 13.525 3 12.094 3 10.672 3 9.445 5.425 8.98 8.827c-.14.966-.214 2.007-.214 3.104s.074 2.146.214 3.113c.325 2.36 1.329 4.636 2.388 5.798M5.796 11.94h5.894M15.363 19.447a3.219 3.219 0 1 0-.122-3.112"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.023 16.334H15.24v-1.772"
    />
  </Svg>
);
export default IconlystWorldRefreshBroken;
