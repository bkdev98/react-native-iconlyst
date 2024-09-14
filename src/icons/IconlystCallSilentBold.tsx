import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.77 2.364c.228 0 .446.103.605.265a.893.893 0 0 1 0 1.23v.01l-9.416 9.646-.462.472.593-.605c3.28 2.694 4.206-1.159 6.53 1.202 2.396 2.447 3.774 2.941.735 6.043-.037.032-.096.1-.18.187l-.06.06c-.798.783-3.428 2.605-10.31-4.126l-5.36 5.498a.86.86 0 0 1-.595.254.9.9 0 0 1-.605-.254.9.9 0 0 1-.129-1.057l.03-.04a.5.5 0 0 1 .07-.092l17.96-18.428a.82.82 0 0 1 .594-.265M9.21 5.137c2.03 2.07-.602 3.058.477 5.516l-3.502 3.552C.177 7.398 2.588 5.048 3.163 4.48l.044-.044.047-.05c3.069-3.113 3.545-1.696 5.956.75"
    />
  </Svg>
);
export default IconlystCallSilentBold;
