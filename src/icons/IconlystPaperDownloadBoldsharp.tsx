import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperDownloadBoldsharp = ({
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
      d="M14.54 8.341v-4.66l4.47 4.66zm-3.402 9.632-3.424-3.439 1.062-1.059 1.611 1.618v-5.59h1.5v5.591l1.611-1.619 1.063 1.058zM15.03 2.25H4.08v19.5h16.34V7.87z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperDownloadBoldsharp;
