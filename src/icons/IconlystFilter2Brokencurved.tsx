import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Brokencurved = ({
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
      d="M16.695 3.061c3.115.166 4.555.778 4.555 3.04 0 3.726-6.983 6.104-6.983 9.499 0 3.394-.003 5.4-2.013 5.4-2.012 0-2.02-2.006-2.02-5.4S3.25 9.827 3.25 6.101C3.25 2.953 6.04 3 12.249 3"
    />
  </Svg>
);
export default IconlystFilter2Brokencurved;
