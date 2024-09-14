import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteCodeTwoTone = ({
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
      d="M8.282 3h8.435C19.665 3 21.5 5.08 21.5 8.026v7.947c0 2.945-1.835 5.027-4.785 5.027H8.282C5.334 21 3.5 18.918 3.5 15.973V8.026C3.5 5.08 5.343 3 8.282 3M6.8 6.55h-.01m2.495 0h-.01m2.496 0h-.01M21.5 9.492h-18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.681 13.117-1.995 1.996 1.995 1.994M14.318 13.117l1.996 1.996-1.996 1.994"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebsiteCodeTwoTone;
