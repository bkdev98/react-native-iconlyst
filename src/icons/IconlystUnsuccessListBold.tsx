import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnsuccessListBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.264 18.78a1 1 0 0 1-.707-.293L7.13 16.063l-2.424 2.424a.999.999 0 1 1-1.414-1.414l2.425-2.424-2.424-2.423a1 1 0 0 1 1.413-1.414l2.425 2.423 2.424-2.423a1 1 0 0 1 1.414 1.414l-2.424 2.423 2.425 2.424a.999.999 0 0 1-.707 1.707M20 7.219H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2m0 5.68h-5.397a1 1 0 1 1 0-2H20a1 1 0 1 1 0 2m0 5.88h-5.397a1 1 0 1 1 0-2H20a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnsuccessListBold;
