import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoryBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 6.5C3 3.875 3.028 3 6.5 3s3.5.875 3.5 3.5.011 3.5-3.5 3.5S3 9.125 3 6.5"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.5 10c3.511 0 3.5-.875 3.5-3.5S20.972 3 17.5 3 14 3.875 14 6.5c0 1.331-.003 2.212.452 2.757M6.5 14c-3.472 0-3.5.875-3.5 3.5S2.989 21 6.5 21s3.5-.875 3.5-3.5c0-1.139-.005-1.948-.295-2.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5-3.5-.875-3.5-3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCategoryBroken;
