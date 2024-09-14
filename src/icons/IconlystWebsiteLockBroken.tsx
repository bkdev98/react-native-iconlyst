import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteLockBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.942 13.036V8.18c0-2.845-1.771-4.854-4.618-4.854H8.177c-2.838 0-4.618 2.01-4.618 4.854v3.838M3.559 15.856c0 2.845 1.772 4.854 4.618 4.854h1.69M6.98 6.682h-.01m4.983 0h-.01m-2.476 0h-.01M20.942 9.596H6.36M14.811 21.324a1.614 1.614 0 0 1-1.614-1.615v-1.825c0-.892.722-1.613 1.614-1.613h3.251c.891 0 1.614.721 1.614 1.613v1.825c0 .892-.723 1.614-1.614 1.614"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.377 16.304v-1.202a1.941 1.941 0 0 0-3.88-.007v1.209"
    />
  </Svg>
);
export default IconlystWebsiteLockBroken;
