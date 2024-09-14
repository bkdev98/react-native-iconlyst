import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerCloudBroken = ({
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
      d="M8.026 3C5.081 3 3 4.834 3 7.782v8.434C3 19.165 5.081 21 8.026 21h.917M21 12.325V7.782C21 4.842 18.919 3 15.974 3H12M12.22 12H3.023M7.363 16.135h.523M7.363 7.865h.523m4.216 0h4.534M13.603 21c-.233 0-.54-.048-.847-.173a2.11 2.11 0 0 1-1.24-1.922c0-1.321.933-2.098 2.089-2.109 0-.83.652-2.493 2.493-2.493 1.842 0 2.494 1.662 2.494 2.493 1.156.011 2.089.788 2.089 2.109a2.11 2.11 0 0 1-1.239 1.924c-.311.125-.62.17-.852.17"
    />
  </Svg>
);
export default IconlystServerCloudBroken;
