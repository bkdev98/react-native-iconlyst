import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditProfileBroken = ({
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
      d="m15.154 19.858-.766.128a.857.857 0 0 1-.994-.938l.085-.79c.041-.381.2-.74.457-1.026l3.015-3.321a1.05 1.05 0 0 1 1.486-.057l.704.652c.425.394.451 1.059.057 1.485l-2.979 3.28a1.84 1.84 0 0 1-1.065.587"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.324 19.81c0-2.083 1.644-4.677 6.383-4.677M7.798 8.016a4.015 4.015 0 1 0 .98-2.63"
    />
  </Svg>
);
export default IconlystEditProfileBroken;
