import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNutLight = ({
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
      d="M7.377 7.457c2.24-1.53 6.967-1.518 9.2 0 1.612 1.316 1.94 3.166 1.637 5.05H5.784c-.286-1.883-.017-3.736 1.593-5.05"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.006 6.313C11.723 5.05 12.584 3 14.43 3M6.75 12.507c0 5.26.23 6.39 5.203 8.493 4.973-2.103 5.204-3.233 5.204-8.493"
    />
  </Svg>
);
export default IconlystNutLight;
