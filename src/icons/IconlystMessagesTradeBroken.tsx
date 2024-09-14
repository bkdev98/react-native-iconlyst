import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTradeBroken = ({
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
      d="m8.818 11.542 1.64-1.587 1.64 1.586M16.785 14.111l-1.64 1.587-1.64-1.587M10.457 9.955v5.271M15.145 15.698v-5.272"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.437 6.439a8.986 8.986 0 0 1 12.728 0c3.517 3.53 3.512 9.247 0 12.77a8.98 8.98 0 0 1-10.156 1.81c-.492-.199-.896-.359-1.28-.359-1.068.006-2.398 1.046-3.089.352-.69-.693.346-2.027.346-3.105 0-.386-.154-.783-.352-1.278a9.1 9.1 0 0 1-.047-7.501"
    />
  </Svg>
);
export default IconlystMessagesTradeBroken;
