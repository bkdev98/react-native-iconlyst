import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullLight = ({
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
      d="M7.292 8.945v6.107"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.292 20.001a2.474 2.474 0 1 1 0-4.947 2.474 2.474 0 0 1 0 4.947M7.292 8.947a2.474 2.474 0 1 1 0-4.948 2.474 2.474 0 0 1 0 4.948M16.71 8.947a2.474 2.474 0 1 1 0-4.948 2.474 2.474 0 0 1 0 4.948"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.728 8.945v1.17a2.006 2.006 0 0 1-2.007 2.006H7.288"
    />
  </Svg>
);
export default IconlystGitPullLight;
