import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletBroken = ({
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
      d="M21.25 14.085h-5.023a2.09 2.09 0 1 1 0-4.178h2.334"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 20.31h4.434a4.566 4.566 0 0 0 4.566-4.566V8.255a4.566 4.566 0 0 0-4.566-4.566H7.816A4.566 4.566 0 0 0 3.25 8.255v7.49a4.566 4.566 0 0 0 4.566 4.566h.966M8.364 10.781v2.43"
    />
  </Svg>
);
export default IconlystWalletBroken;
