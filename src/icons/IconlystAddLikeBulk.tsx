import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddLikeBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.477 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75c.563 0 1.136-.051 1.704-.152a.75.75 0 0 0 .607-.869.746.746 0 0 0-.87-.608 8 8 0 0 1-1.441.129c-4.55 0-8.25-3.701-8.25-8.25s3.7-8.25 8.25-8.25 8.25 3.701 8.25 8.25c0 .753-.1 1.492-.297 2.198a.75.75 0 1 0 1.444.405A9.7 9.7 0 0 0 22.227 12c0-5.376-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.693 8.483a2.83 2.83 0 0 0-2.217.233 2.84 2.84 0 0 0-2.228-.23c-1.67.548-2.192 2.366-1.732 3.808l.001.002c.713 2.203 3.596 3.797 3.718 3.864a.5.5 0 0 0 .48 0c.124-.068 3.03-1.683 3.72-3.866.461-1.442-.063-3.26-1.742-3.811M20.125 17.571H19.1v-1.03a.75.75 0 0 0-1.5 0v1.03h-1.025a.75.75 0 0 0 0 1.5H17.6v1.02a.75.75 0 0 0 1.5 0v-1.02h1.025a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddLikeBulk;
