import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagScanTwoTone = ({
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
      d="M21.5 8.47V6.891A3.89 3.89 0 0 0 17.607 3H16.35M3.5 8.47V6.891A3.89 3.89 0 0 1 7.393 3h1.29M3.5 15.531v1.577A3.89 3.89 0 0 0 7.393 21H8.65M21.5 15.531v1.577A3.89 3.89 0 0 1 17.606 21h-1.29"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.753 7.188h-4.507c-1.57 0-2.556 1.112-2.556 2.686v4.247c0 1.573.98 2.685 2.555 2.685h4.508c1.575 0 2.556-1.112 2.556-2.685V9.874c0-1.574-.98-2.687-2.556-2.687"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.414 10.297a1.913 1.913 0 1 1-3.826 0"
    />
  </Svg>
);
export default IconlystBagScanTwoTone;
