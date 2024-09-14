import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowBulk = ({
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
      d="M12.5 8.27a7.48 7.48 0 0 0-5.247 2.173A7.46 7.46 0 0 0 5.08 15.69v2.21a.9.9 0 0 0 1.8 0v-2.21c0-1.482.6-2.93 1.646-3.973a5.67 5.67 0 0 1 3.975-1.648c1.478 0 2.926.6 3.975 1.647a5.65 5.65 0 0 1 1.645 3.974v2.21a.9.9 0 0 0 1.8 0v-2.21a7.46 7.46 0 0 0-2.173-5.247A7.48 7.48 0 0 0 12.5 8.27"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.498 11.37c-1.18 0-2.337.477-3.18 1.316a4.5 4.5 0 0 0-1.313 3.183v2.03a.9.9 0 0 0 1.8 0v-2.03c0-.72.281-1.4.787-1.912 1.007-1.003 2.811-.998 3.81-.005.51.516.791 1.196.791 1.917v2.03a.9.9 0 0 0 1.8 0v-2.03a4.5 4.5 0 0 0-1.318-3.188 4.54 4.54 0 0 0-3.177-1.312" />
      <Path d="M19.854 8.242A10.34 10.34 0 0 0 12.5 5.2a10.34 10.34 0 0 0-7.354 3.043A10.47 10.47 0 0 0 2.1 15.6v2.3a.9.9 0 0 0 1.8 0v-2.3c0-2.268.918-4.485 2.518-6.084A8.55 8.55 0 0 1 12.5 7c2.297 0 4.457.894 6.082 2.516A8.66 8.66 0 0 1 21.1 15.6v2.3a.9.9 0 0 0 1.8 0v-2.3c0-2.74-1.11-5.422-3.046-7.357" />
    </G>
  </Svg>
);
export default IconlystRainbowBulk;
