import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudHailLight = ({
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
      d="M3.282 11.372a4.118 4.118 0 0 1 5.636-3.83 6.194 6.194 0 1 1 10.196 6.255"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.995 18.94h1.568c1.376 0 2.491-1.164 2.491-2.6 0-1.438-1.115-2.603-2.49-2.603-.325 0-.635.065-.92.183-.456-1.623-1.893-2.807-3.595-2.807-1.122 0-2.13.516-2.817 1.333M8.729 14.752l.008-.048M4.342 14.752l1.288.744v1.487l-1.288.743-1.287-.743v-1.487z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.456 14.752 1.287.744v1.487l-1.287.743-1.288-.743v-1.487zM8.728 17.925l1.287.744v1.486l-1.287.744-1.288-.744V18.67z"
    />
  </Svg>
);
export default IconlystCloudHailLight;
