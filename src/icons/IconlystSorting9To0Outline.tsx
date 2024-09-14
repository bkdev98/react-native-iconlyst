import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSorting9To0Outline = ({
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
      d="M8.5 6.684a.75.75 0 0 1 .75.75v8.856l1.387-1.387a.75.75 0 1 1 1.06 1.06l-2.666 2.668a.75.75 0 0 1-1.06 0l-2.667-2.667a.75.75 0 1 1 1.06-1.06l1.387 1.386V7.434a.75.75 0 0 1 .75-.75M17.39 15.293c-.569 0-1.029.46-1.029 1.028v2.666a1.028 1.028 0 0 0 2.056 0v-2.666c0-.568-.46-1.028-1.028-1.028m-2.529 1.028a2.527 2.527 0 1 1 5.056 0v2.666a2.528 2.528 0 0 1-5.056 0zM17.39 5.516a1.027 1.027 0 1 0 0 2.055h1.027V6.543c0-.568-.46-1.027-1.028-1.027m2.527 1.027a2.527 2.527 0 1 0-2.528 2.528h1.028v.14c0 .566-.46 1.027-1.028 1.027h-1.261a.75.75 0 0 0 0 1.5h1.261a2.53 2.53 0 0 0 2.528-2.528z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSorting9To0Outline;
