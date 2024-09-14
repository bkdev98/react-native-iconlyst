import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseLoveLight = ({
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
      strokeWidth={1.5}
      d="M11.03 8.921c4.047 0 7.328-1.323 7.328-2.955S15.078 3.01 11.03 3.01c-4.046 0-7.327 1.323-7.327 2.956 0 1.632 3.28 2.955 7.327 2.955Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.703 11.797v5.861s0 2.609 6.204 2.901M18.357 10.826V5.941"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.907 14.702C3.703 14.409 3.703 11.8 3.703 11.8V5.939"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.829 17.67c-.37-1.158.062-2.48 1.276-2.87a2.07 2.07 0 0 1 1.873.316 2.09 2.09 0 0 1 1.87-.316c1.214.39 1.65 1.712 1.28 2.87-.576 1.83-3.15 3.243-3.15 3.243s-2.553-1.39-3.15-3.244"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseLoveLight;
