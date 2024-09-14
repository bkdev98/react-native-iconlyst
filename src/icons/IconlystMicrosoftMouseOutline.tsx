import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftMouseOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.803 7.796a5.354 5.354 0 0 1 5.354-5.355h4.184a5.353 5.353 0 0 1 5.353 5.353v8.445a5.354 5.354 0 0 1-5.353 5.354h-4.183a5.353 5.353 0 0 1-5.354-5.353zm1.5 0v8.444a3.853 3.853 0 0 0 3.855 3.853h4.183a3.854 3.854 0 0 0 3.854-3.854l-.001-8.444A3.853 3.853 0 0 0 14.34 3.94h-4.184a3.854 3.854 0 0 0-3.854 3.855"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.441a.75.75 0 0 1 .75.75v6.505a.75.75 0 0 1-1.5 0V3.19a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.805 9.695a.75.75 0 0 1 .75-.75h13.392a.75.75 0 0 1 0 1.5H5.555a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftMouseOutline;
