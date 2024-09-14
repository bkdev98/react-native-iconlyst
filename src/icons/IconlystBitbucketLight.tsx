import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitbucketLight = ({
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
      d="M19 3.95H5a2 2 0 0 0-1.955 2.422l2.594 12a2 2 0 0 0 1.955 1.577h8.672a2 2 0 0 0 1.95-1.556l2.732-12A2 2 0 0 0 19 3.95"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.07 14.582a.5.5 0 0 1-.494.418h-3.153a.5.5 0 0 1-.493-.418l-.833-5A.5.5 0 0 1 9.59 9h4.82a.5.5 0 0 1 .493.582z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitbucketLight;
