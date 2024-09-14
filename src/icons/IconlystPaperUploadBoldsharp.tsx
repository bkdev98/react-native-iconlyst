import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperUploadBoldsharp = ({
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
      d="M14.54 8.341v-4.66l4.47 4.66zm-1.04 5.346-1.613-1.619v5.592h-1.5v-5.59l-1.61 1.617-1.063-1.058 3.424-3.439 3.424 3.439zM15.03 2.25H4.08v19.5h16.34V7.87z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperUploadBoldsharp;
