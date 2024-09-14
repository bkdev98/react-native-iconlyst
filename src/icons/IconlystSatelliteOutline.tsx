import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSatelliteOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.088 14.027a.75.75 0 0 1 .326 1.01l-2.538 4.959a.174.174 0 0 0 .156.254h6.133a.175.175 0 0 0 .164-.236l-1.146-3.086a.75.75 0 1 1 1.406-.522l1.146 3.085a1.675 1.675 0 0 1-1.57 2.259H6.032a1.674 1.674 0 0 1-1.491-2.437l2.537-4.96a.75.75 0 0 1 1.01-.326"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.46 4.929c-.039 0-.062.014-.08.039a6.779 6.779 0 0 0 9.502 9.502c.024-.019.038-.042.038-.082a.22.22 0 0 0-.069-.157L7.618 4.998a.22.22 0 0 0-.157-.07m-1.273-.872c.653-.853 1.83-.781 2.492-.12l9.233 9.233c.661.662.734 1.84-.12 2.492a8.27 8.27 0 0 1-8.195 1.07 8.277 8.277 0 0 1-3.41-12.675M13.051 5.493a.75.75 0 0 1 .908-.549c1.509.371 2.61 1.499 2.931 2.945a.75.75 0 1 1-1.464.326c-.195-.876-.856-1.576-1.826-1.814a.75.75 0 0 1-.549-.908M14.16 2.82a.75.75 0 0 1 .9-.562 6.11 6.11 0 0 1 4.562 4.49.75.75 0 0 1-1.454.368 4.61 4.61 0 0 0-3.445-3.396.75.75 0 0 1-.563-.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSatelliteOutline;
