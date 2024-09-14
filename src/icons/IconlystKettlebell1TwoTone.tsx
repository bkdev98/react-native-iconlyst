import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettlebell1TwoTone = ({
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
      d="M16.888 18.976A6.913 6.913 0 1 1 7.11 9.199a6.913 6.913 0 0 1 9.777 9.777"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.078 17.674a3.75 3.75 0 0 0 2.44-2.302M15.788 8.272c.537-.824 1.532-3.715-.994-4.69-1.712-.779-3.872-.773-5.586 0-2.526.975-1.532 3.866-.995 4.69"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystKettlebell1TwoTone;
