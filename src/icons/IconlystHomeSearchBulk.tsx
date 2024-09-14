import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeSearchBulk = ({
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
      d="M22.19 9.302 14.664 3.34a3.376 3.376 0 0 0-4.187.002L2.95 9.302a1.001 1.001 0 0 0 1.24 1.569l.127-.1v6.806c0 2.1 1.71 3.809 3.814 3.809h8.879a3.816 3.816 0 0 0 3.814-3.81v-6.805l.126.1a1 1 0 1 0 1.241-1.569"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.476 3.343a3.38 3.38 0 0 1 4.188 0L22.191 9.3a1 1 0 1 1-1.242 1.568l-7.525-5.957a1.38 1.38 0 0 0-1.708 0l-7.525 5.957A1 1 0 1 1 2.949 9.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.581 17.136a.75.75 0 0 0 .531-1.28l-.96-.96a3.416 3.416 0 0 0-.472-4.21 3.397 3.397 0 0 0-4.796.001 3.405 3.405 0 0 0 .002 4.8 3.4 3.4 0 0 0 4.205.47l.96.96c.146.145.338.22.53.22m-4.634-5.389a1.88 1.88 0 0 1 1.337-.553c.483 0 .966.184 1.333.55.737.743.738 1.945.005 2.68q0 .002-.004.003a1.893 1.893 0 0 1-2.672-.002 1.9 1.9 0 0 1 .001-2.678"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeSearchBulk;
