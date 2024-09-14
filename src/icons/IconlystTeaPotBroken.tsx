import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeaPotBroken = ({
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
      d="M6.418 14.218H15m0 7.226a2.13 2.13 0 0 0 1.48-.584 6.15 6.15 0 0 0 1.892-4.442c0-3.856-3.529-6.861-7.518-6.023-2.286.48-4.146 2.302-4.666 4.578-.524 2.297.243 4.45 1.714 5.875.4.386.94.596 1.495.596h2.284m1.844-12.528a1.33 1.33 0 1 0-2.661.001 1.33 1.33 0 0 0 2.661-.001"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.02 17.59-3.526-5.68h1.492l2.833 1.474M3.988 6.438a1.37 1.37 0 0 1 0 1.94M7.455 2.559a1.37 1.37 0 0 0 0 1.94 1.37 1.37 0 0 1 0 1.94"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.518 11.999c.995-.828 3.733-1.442 4.736.899.53 1.234.163 2.459-.535 3.447"
    />
  </Svg>
);
export default IconlystTeaPotBroken;
