import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale1Outline = ({
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
      d="M3.91 3.783C4.956 2.763 6.45 2.27 8.065 2.27h8.37c1.615 0 3.11.492 4.155 1.512 1.062 1.035 1.575 2.53 1.363 4.337v.003l-.866 7.933c-.195 1.58-.494 3.03-1.328 4.07-.884 1.102-2.237 1.602-4.172 1.602H8.912c-1.922 0-3.277-.501-4.166-1.598-.843-1.04-1.155-2.489-1.35-4.074l-.002-.012-.847-7.925c-.212-1.807.301-3.302 1.363-4.336m1.047 1.074c-.684.666-1.086 1.677-.92 3.091l.001.008.847 7.922c.195 1.575.477 2.63 1.026 3.307.502.62 1.338 1.043 3.001 1.043h6.675c1.68 0 2.508-.425 3.001-1.04.542-.675.814-1.73 1.01-3.31l.864-7.93c.167-1.414-.235-2.425-.919-3.091-.7-.682-1.78-1.086-3.107-1.086H8.065c-1.327 0-2.409.404-3.108 1.086"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.257 10.879h7.988a4.064 4.064 0 0 0-7.988 0m-1.57.75a5.563 5.563 0 1 1 11.127 0 .75.75 0 0 1-.75.75H7.438a.75.75 0 0 1-.75-.75M3.668 16.902a.75.75 0 0 1 .75-.75h15.647a.75.75 0 1 1 0 1.5H4.418a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 8.86a.75.75 0 0 1 .75.75v2.018a.75.75 0 0 1-1.5 0V9.61a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale1Outline;
