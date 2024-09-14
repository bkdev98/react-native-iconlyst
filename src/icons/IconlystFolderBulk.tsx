import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M16.884 5.115h-2.943a2.43 2.43 0 0 1-1.894-.887l-.969-1.34A2.37 2.37 0 0 0 9.193 2h-2.08C3.378 2 2 4.192 2 7.92v4.028c-.005.443 19.996.443 19.997 0v-1.17c.018-3.728-1.325-5.662-5.113-5.662"
        opacity={0.4}
      />
      <Path d="M16.875 5.115c1.305-.101 2.6.292 3.628 1.1q.178.15.33.328c.32.375.566.805.728 1.27.319.954.466 1.957.436 2.963v5.253a9 9 0 0 1-.098 1.322 6 6 0 0 1-.8 2.183 4.4 4.4 0 0 1-.676.887 6 6 0 0 1-4.366 1.571H7.931a6.03 6.03 0 0 1-4.375-1.57 4.4 4.4 0 0 1-.667-.888 5.8 5.8 0 0 1-.782-2.183A8 8 0 0 1 2 16.03v-5.253q0-.659.071-1.313c.027-.204.09-.4.09-.595.09-.526.254-1.037.488-1.517.694-1.482 2.116-2.236 4.446-2.236Zm.24 8.776H6.97a.826.826 0 1 0 0 1.65h10.083a.83.83 0 0 0 .863-.799.74.74 0 0 0-.178-.532.78.78 0 0 0-.622-.32" />
    </G>
  </Svg>
);
export default IconlystFolderBulk;
