import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetShopLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.147 17.078-.534-6.276A2.833 2.833 0 0 0 17.79 8.21H6.203a2.833 2.833 0 0 0-2.823 2.595l-.528 6.278a3.89 3.89 0 0 0 3.878 4.217h10.54c2.28 0 4.071-1.95 3.877-4.221"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.135 8.209V7.166A3.864 3.864 0 0 1 12 3.3a3.864 3.864 0 0 1 3.865 3.865v1.043M11.99 11.48v-.048m-.007-.143a.21.21 0 1 0 .002.42.21.21 0 0 0-.002-.42M15.045 13.031v-.048m-.007-.143a.21.21 0 1 0 .002.42.21.21 0 0 0-.002-.42M8.948 13.031v-.048m-.006-.143a.21.21 0 1 0 .002.42.21.21 0 0 0-.002-.42"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.02 17.65c1.279 0 2.902 1.11 2.879-.598-.01-1.28-1.343-2.481-2.88-2.483-1.546 0-3.081 1.306-2.868 2.637.236 1.543 1.734.444 2.868.444Z"
    />
  </Svg>
);
export default IconlystPetShopLight;
