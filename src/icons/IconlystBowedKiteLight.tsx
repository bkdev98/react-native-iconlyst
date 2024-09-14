import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowedKiteLight = ({
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
      d="M11.474 17.635 9.574 7.39l7.761-2.835 2.995 7.688z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.572 7.394c4.978.534 7.347 1.688 10.752 4.847M11.46 17.685c.017 1.443-1.065 3.748-5.563 2.902-1.366-.258-2.389-.204-3.147.034"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.863 17.404c2.33-.959 3.648 1.659 5.575.254M17.33 4.557l-5.834 13.022M9.342 2.492h-.01M19.417 17.94c-.537-.153-1.756-.151-2.34 1.086M4.582 11.058c.214-.83.045-1.496-.263-1.996"
    />
  </Svg>
);
export default IconlystBowedKiteLight;
