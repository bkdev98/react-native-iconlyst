import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteCodeBroken = ({
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
      d="M6.549 6.55h-.01m2.496 0h-.01m2.496 0h-.01M10.432 13.117l-1.996 1.996 1.996 1.994M14.068 13.117l1.996 1.996-1.996 1.994"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.318 21h4.217c2.948 0 4.782-2.082 4.782-5.027V8.026C21.317 5.081 19.483 3 16.535 3H8.102C5.162 3 3.318 5.081 3.318 8.026v7.947c0 2.945 1.835 5.026 4.783 5.026h.685M18.366 9.492H3.318"
    />
  </Svg>
);
export default IconlystWebsiteCodeBroken;
