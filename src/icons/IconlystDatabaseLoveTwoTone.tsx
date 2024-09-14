import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseLoveTwoTone = ({
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
      strokeWidth={1.5}
      d="M11.53 8.921c4.047 0 7.328-1.323 7.328-2.955S15.578 3.01 11.53 3.01c-4.046 0-7.327 1.323-7.327 2.956 0 1.632 3.28 2.955 7.327 2.955Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.203 5.942V17.66s0 2.608 6.204 2.9M18.857 10.826V5.941"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.407 14.702C4.203 14.409 4.203 11.8 4.203 11.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.329 17.67c-.37-1.158.062-2.48 1.276-2.87a2.07 2.07 0 0 1 1.873.316 2.09 2.09 0 0 1 1.87-.316c1.214.39 1.65 1.712 1.28 2.87-.576 1.83-3.15 3.243-3.15 3.243s-2.553-1.39-3.15-3.244"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDatabaseLoveTwoTone;
