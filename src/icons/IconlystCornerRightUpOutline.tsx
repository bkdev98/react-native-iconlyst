import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCornerRightUpOutline = ({
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
      d="M14.582 4.25a.75.75 0 0 1 .53.22l3.443 3.443a.75.75 0 1 1-1.06 1.06l-2.913-2.912-2.913 2.912a.75.75 0 0 1-1.06-1.06L14.05 4.47a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.582 4.45a.75.75 0 0 1 .75.75v8.175a6.376 6.376 0 0 1-6.376 6.377H5.975a.75.75 0 0 1 0-1.5h2.98a4.876 4.876 0 0 0 4.877-4.877V5.2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCornerRightUpOutline;
