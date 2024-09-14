import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.659 20.038a5.1 5.1 0 0 1-3.314-3.764.75.75 0 0 0-1.469.306 6.6 6.6 0 0 0 4.295 4.876.75.75 0 0 0 .488-1.418M7.59 14.948c.186.059.37-.085.383-.28q.022-.321.077-.635a7.84 7.84 0 0 1 6.56-6.56c.22-.039.44-.057.659-.07a.287.287 0 0 0 .263-.369c-.805-2.572-3.208-4.441-6.032-4.441-3.49 0-6.33 2.84-6.33 6.33 0 2.825 1.86 5.214 4.42 6.025" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.82 8.883c-.334 0-.67.018-1 .08a6.31 6.31 0 0 0-5.28 5.28c-.059.317-.08.662-.08 1a6.336 6.336 0 0 0 6.33 6.29c3.48 0 6.32-2.84 6.32-6.33 0-3.47-2.82-6.3-6.29-6.32M17.343 3.926a5.1 5.1 0 0 1 3.313 3.764.749.749 0 1 0 1.468-.306 6.6 6.6 0 0 0-4.293-4.876.749.749 0 1 0-.488 1.418"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCryptoBulk;
