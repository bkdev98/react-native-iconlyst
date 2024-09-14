import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpectrumSquareOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.088 7.25c4.292 0 7.825 3.348 7.825 7.541V16a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75v-1.209c0-1.101-.94-2.046-2.163-2.046h-1.25a.75.75 0 0 1-.75-.75V8.01a.75.75 0 0 1 .744-.75zm.003 1.5-.503.004v2.49h.5c1.994 0 3.663 1.56 3.663 3.547v.459h2.662v-.459c0-3.306-2.802-6.04-6.322-6.041"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpectrumSquareOutline;
