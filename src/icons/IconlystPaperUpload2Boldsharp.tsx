import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperUpload2Boldsharp = ({
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
      d="M14.54 8.48V3.82l4.47 4.66zm-.525 5.039h-.75a3.25 3.25 0 0 1-1.837-.587v5.846h-1.5v-5.846a3.24 3.24 0 0 1-1.837.587h-.75v-1.5h.75c.961 0 1.837-.876 1.837-1.837v-.75h1.5v.75c0 .96.876 1.837 1.837 1.837h.75zm1.015-11.13H4.08v19.5h16.34V8.009z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperUpload2Boldsharp;
