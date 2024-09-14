import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddLikeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.55 20.863A9 9 0 0 1 3.977 12a9 9 0 1 1 17.675 2.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.493 12.135c-.409-1.278.07-2.74 1.412-3.173a2.29 2.29 0 0 1 2.071.35 2.31 2.31 0 0 1 2.069-.35c1.343.433 1.824 1.895 1.415 3.173-.638 2.026-3.484 3.587-3.484 3.587s-2.823-1.538-3.483-3.587"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.851 16.542v3.546m1.775-1.772h-3.55"
    />
  </Svg>
);
export default IconlystAddLikeLight;
