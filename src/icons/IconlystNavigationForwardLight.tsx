import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationForwardLight = ({
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
      d="m18.031 17.95-4.439-3.946a2.397 2.397 0 0 0-3.185 0L5.968 17.95c-1.325 1.178-.25 3.352 1.49 3.013l4.21-.818h.664l4.21.818c1.74.339 2.815-1.835 1.49-3.013"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.32 5.053 11.998 3l2.678 2.053M11.998 9.592V3"
    />
  </Svg>
);
export default IconlystNavigationForwardLight;
