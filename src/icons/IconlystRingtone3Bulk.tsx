import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone3Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M9.866 18.699q-.001-.008-.003-.015h4.273q-.001.008-.003.014l1.36-.014h1.476c.87 0 1.667-.439 2.133-1.173a2.52 2.52 0 0 0 .153-2.43l-.423-.898a4.4 4.4 0 0 1-.415-1.855V11.13A6.424 6.424 0 0 0 12 4.715a6.424 6.424 0 0 0-6.416 6.416l-.001 1.197c0 .636-.144 1.277-.415 1.855l-.422.899a2.51 2.51 0 0 0 .151 2.429 2.52 2.52 0 0 0 2.134 1.173h1.476q-.002.008-.003.014z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12 20.25c-.96 0-1.76-.66-1.98-1.55H8.5c.25 1.72 1.71 3.05 3.5 3.05s3.26-1.33 3.5-3.05h-1.52c-.22.89-1.02 1.55-1.98 1.55M14.36 5.152V4.61c0-1.3-1.06-2.36-2.36-2.36S9.65 3.31 9.65 4.61v.539a6.5 6.5 0 0 1 1.5-.38V4.61c0-.47.38-.86.85-.86s.86.39.86.86v.16a6.1 6.1 0 0 0-1.68-.004 6.6 6.6 0 0 1 3.18.386"
    />
  </Svg>
);
export default IconlystRingtone3Bulk;
