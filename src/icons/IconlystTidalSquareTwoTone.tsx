import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTidalSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.619 12.879a.517.517 0 0 1 .762 0l1.194 1.302c.18.197.18.5 0 .698l-1.194 1.303a.517.517 0 0 1-.762 0l-1.194-1.303a.517.517 0 0 1 0-.698zM11.619 8.746a.517.517 0 0 1 .762 0l1.194 1.302c.18.198.18.5 0 .698L12.38 12.05a.517.517 0 0 1-.762 0l-1.194-1.303a.517.517 0 0 1 0-.698zM15.408 8.746a.517.517 0 0 1 .762 0l1.194 1.302c.181.197.181.5 0 .698L16.17 12.05a.517.517 0 0 1-.762 0l-1.193-1.303a.517.517 0 0 1 0-.698zM7.83 8.746a.517.517 0 0 1 .762 0l1.193 1.302c.181.198.181.5 0 .698L8.592 12.05a.517.517 0 0 1-.762 0l-1.194-1.303a.517.517 0 0 1 0-.698z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTidalSquareTwoTone;
