import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperFailOutlinesharp = ({
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
      d="m9.912 11.278 4.554 4.554-1.06 1.061-4.555-4.554z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.468 12.339-4.554 4.554-1.06-1.06 4.554-4.555z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.825 2h11.312l5.537 5.766V22H3.825zm1.5 1.5v17h13.85V8.37L14.497 3.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.092 2.555V7.9h5.107v1.5h-6.607V2.555z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperFailOutlinesharp;