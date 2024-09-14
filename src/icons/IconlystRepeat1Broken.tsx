import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeat1Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.269 6.637h5.119M19.353 8.285a5.57 5.57 0 0 1 1.646 3.965 5.57 5.57 0 0 1-1.31 3.598M12.768 15.238l2.622 2.622-2.622 2.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12.25c0 1.553.629 2.948 1.646 3.966a5.6 5.6 0 0 0 3.965 1.647h6.778M6.016 9.26V4.017L3.918 5.065"
    />
  </Svg>
);
export default IconlystRepeat1Broken;
