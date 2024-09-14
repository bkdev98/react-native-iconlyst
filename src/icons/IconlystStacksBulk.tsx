import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStacksBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.239 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.183 11.66h6.635a.75.75 0 0 0 0-1.5H14.09l1.124-1.98a.75.75 0 1 0-1.304-.742l-1.484 2.611-1.483-2.61a.75.75 0 0 0-1.305.742l1.125 1.978h-1.58a.75.75 0 0 0 0 1.5M14.123 13.9h1.695a.75.75 0 0 0 0-1.5H9.183a.75.75 0 0 0 0 1.5h1.546l-1.09 1.918a.75.75 0 0 0 1.304.741l1.483-2.609 1.484 2.61a.75.75 0 0 0 1.023.281.75.75 0 0 0 .281-1.023z"
    />
  </Svg>
);
export default IconlystStacksBulk;
