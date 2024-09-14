import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiqualityBulk = ({
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
      d="M12.5 10.733c-.975 0-1.95-.296-2.759-.889C8.503 8.952 7.412 8.5 6.5 8.5a3.53 3.53 0 0 0-2.473 1.025A3.47 3.47 0 0 0 3 12c0 .936.365 1.815 1.027 2.474A3.53 3.53 0 0 0 6.5 15.5c.912 0 2.003-.453 3.245-1.347a4.65 4.65 0 0 1 2.755-.887z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.5 13.266v-2.533c.976 0 1.951-.296 2.756-.887C16.497 8.952 17.588 8.5 18.5 8.5c.918 0 1.821.374 2.474 1.025A3.46 3.46 0 0 1 22 12c0 .936-.364 1.815-1.026 2.474A3.54 3.54 0 0 1 18.5 15.5c-.912 0-2.003-.453-3.24-1.345a4.67 4.67 0 0 0-2.76-.889"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLiqualityBulk;
