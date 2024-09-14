import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSorting0To9Outline = ({
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
      d="M8.5 6.684a.75.75 0 0 1 .75.75v8.856l1.387-1.387a.75.75 0 1 1 1.06 1.06l-2.666 2.668a.75.75 0 0 1-1.06 0l-2.667-2.667a.75.75 0 1 1 1.06-1.06l1.387 1.386V7.434a.75.75 0 0 1 .75-.75M17.39 15.293a1.028 1.028 0 0 0 0 2.056h1.027V16.32c0-.568-.46-1.028-1.028-1.028m2.527 1.028a2.527 2.527 0 1 0-2.528 2.528h1.028v.138c0 .568-.46 1.028-1.028 1.028h-1.261a.75.75 0 0 0 0 1.5h1.261a2.53 2.53 0 0 0 2.528-2.528zM14.861 6.543a2.528 2.528 0 0 1 5.056 0V9.21a2.528 2.528 0 0 1-5.056 0zm2.528-1.027c-.567 0-1.028.46-1.028 1.027V9.21a1.028 1.028 0 0 0 2.056 0V6.543c0-.568-.46-1.027-1.028-1.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSorting0To9Outline;
