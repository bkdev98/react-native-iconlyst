import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckCheckCompleteOutline = ({
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
      fillRule="evenodd"
      d="M5.298 5.65C4.581 5.65 4 6.233 4 6.95v8.155c0 .538.32 1.002.78 1.211a2.668 2.668 0 0 1 5.082.118h4.025c.255-.87.94-1.556 1.81-1.81V6.98a1.33 1.33 0 0 0-1.33-1.33zm11.899 8.973c.87.254 1.555.94 1.81 1.81h.164a1.33 1.33 0 0 0 1.329-1.33v-1.942h-1.651a.75.75 0 0 1 0-1.5H20.5c0-.64-.378-1.219-.961-1.476l-2.342-1.033zm0-7.11V6.98a2.83 2.83 0 0 0-2.83-2.83H5.299A2.8 2.8 0 0 0 2.5 6.95v8.155a2.83 2.83 0 0 0 2.225 2.765 2.668 2.668 0 0 0 5.137.064h4.025a2.668 2.668 0 0 0 5.12 0h.164A2.83 2.83 0 0 0 22 15.103v-3.442c0-1.233-.728-2.351-1.856-2.849zm-4.68 1.28a.75.75 0 0 1 0 1.06l-2.795 2.795a.75.75 0 0 1-1.06 0l-1.482-1.48a.75.75 0 1 1 1.06-1.061l.952.95 2.264-2.264a.75.75 0 0 1 1.06 0m-5.214 7.223a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333m9.144 0a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruckCheckCompleteOutline;
