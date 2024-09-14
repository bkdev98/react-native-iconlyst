import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperUploadOutlinesharp = ({
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
      d="M15.093 2.555V7.9H20.2v1.5h-6.607V2.555zM11.864 10.056v7.589h-1.5v-7.59z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.115 9.175 3.424 3.44-1.063 1.057-2.362-2.371-2.361 2.371-1.063-1.058z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperUploadOutlinesharp;
