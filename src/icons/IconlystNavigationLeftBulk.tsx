import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationLeftBulk = ({
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
      d="M7.057 8.767a.746.746 0 0 0 1.06-.012.75.75 0 0 0-.012-1.06L6.809 6.43h1.583c.392.003 3.824.134 3.824 3.821a.75.75 0 0 0 1.5 0c0-4.209-3.481-5.32-5.321-5.32H6.807L8.105 3.66a.751.751 0 0 0-1.048-1.073L4.443 5.142q-.002.002-.003.005a.7.7 0 0 0-.141.205.75.75 0 0 0-.082.326v.001c0 .21.086.398.225.534v.001z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.047 17.844-4.232-3.762a2.793 2.793 0 0 0-3.701 0L6.88 17.844a2.115 2.115 0 0 0-.5 2.574c.444.899 1.365 1.352 2.35 1.165l3.917-.772.538-.01 4.013.782q.222.043.44.043c.81 0 1.533-.445 1.91-1.207a2.116 2.116 0 0 0-.502-2.575"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNavigationLeftBulk;
