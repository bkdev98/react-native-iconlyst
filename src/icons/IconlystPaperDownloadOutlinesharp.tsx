import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperDownloadOutlinesharp = ({
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
      d="M3.825 2h11.312l5.537 5.766V22H3.825zm1.5 1.5v17h13.85V8.37L14.497 3.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.092 2.555V7.9h5.107v1.5h-6.607V2.555zM11.864 17.077V9.488h-1.5v7.59z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.114 17.958 3.424-3.44-1.063-1.058-2.361 2.372-2.362-2.372L7.69 14.52z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperDownloadOutlinesharp;
