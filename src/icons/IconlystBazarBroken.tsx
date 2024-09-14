import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBazarBroken = ({
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
      d="M20.206 14.811c.556-1.581.923-3.453 1.11-5.593a1.48 1.48 0 0 0-1.02-1.528c-.884-.293-2.016-.547-4.808-.84a30.6 30.6 0 0 0-6.332 0c-2.791.293-3.923.547-4.807.84a1.48 1.48 0 0 0-1.021 1.528c.657 7.48 3.494 11.682 8.994 11.682 2.726 0 4.797-1.032 6.274-2.983"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.246 8.59c-1.723-7.445-6.15-7.224-7.85.09"
    />
  </Svg>
);
export default IconlystBazarBroken;
