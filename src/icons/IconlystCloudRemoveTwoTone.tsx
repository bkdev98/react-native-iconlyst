import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRemoveTwoTone = ({
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
      d="M19.064 17.344A4.14 4.14 0 0 0 21.5 13.57c0-2.596-1.83-4.139-4.103-4.14 0-1.633-1.28-4.899-4.897-4.899S7.603 7.797 7.603 9.43C5.333 9.45 3.5 10.974 3.5 13.57c0 1.68 1 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.375 15.219 4.25 4.25M14.626 15.219l-4.251 4.25"
    />
  </Svg>
);
export default IconlystCloudRemoveTwoTone;
