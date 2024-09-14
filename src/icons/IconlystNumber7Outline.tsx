import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber7Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.75 4.383a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .676 1.076c-2.899 6.011-4.23 9.366-4.853 15.747a.75.75 0 0 1-1.493-.146c.608-6.228 1.891-9.725 4.48-15.177H8.25v3.146a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber7Outline;
