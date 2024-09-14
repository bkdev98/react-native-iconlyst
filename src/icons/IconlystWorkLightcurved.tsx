import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkLightcurved = ({
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
      d="M11.961 16.517v-2.628M21.09 11.478l-.03.02c-2.421 1.493-5.62 2.394-9.103 2.394-3.484 0-6.673-.901-9.094-2.393l-.03-.021"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 13.35c0-6.151 2.303-8.202 9.211-8.202 6.91 0 9.211 2.05 9.211 8.203s-2.302 8.203-9.21 8.203S2.75 19.503 2.75 13.35"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.224 5.37v-.63c0-1.265-.923-2.29-2.06-2.29h-2.405c-1.137 0-2.06 1.025-2.06 2.29v.63"
    />
  </Svg>
);
export default IconlystWorkLightcurved;
