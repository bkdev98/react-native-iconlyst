import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperUpload2Outlinesharp = ({
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
      d="M3.825 2.639h11.312l5.537 5.766V22.64H3.825zm1.5 1.5v17h13.85V9.009l-4.677-4.87z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.093 3.193V8.54H20.2v1.5h-6.607V3.193zM10.364 10.37v9.346h1.5V10.37z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.864 11.12c0 1.846-1.609 3.337-3.337 3.337h-.75v-1.5h.75c.932 0 1.837-.852 1.837-1.837v-.75h1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.364 11.12c0 1.846 1.61 3.337 3.337 3.337h.75v-1.5h-.75c-.932 0-1.837-.852-1.837-1.837v-.75h-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperUpload2Outlinesharp;
