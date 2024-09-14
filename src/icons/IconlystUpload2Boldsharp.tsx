import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpload2Boldsharp = ({
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
      d="M13 10.969v6.26h-1.5v-6.26h-9v11.52H22v-11.52z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13 6.167c.99 1.045 2.371 1.721 3.85 1.721h.75v-1.5h-.75c-2.015 0-3.85-1.833-3.85-3.846v-.754h-1.5v.754c0 2.013-1.83 3.846-3.84 3.846h-.75v1.5h.75c1.475 0 2.852-.674 3.84-1.718v4.799H13z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpload2Boldsharp;
