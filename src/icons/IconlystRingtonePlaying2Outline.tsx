import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtonePlaying2Outline = ({
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
      d="M6.275 7.794a7.478 7.478 0 1 1 14.445 3.871l-.349 1.306a4.7 4.7 0 0 0-.085 2.038l.199 1.105c.401 2.228-1.653 4.116-3.84 3.53L5.815 16.74c-2.187-.585-3.023-3.246-1.56-4.976l.723-.858A4.7 4.7 0 0 0 5.923 9.1zm8.769-3.839a5.98 5.98 0 0 0-7.32 4.228l-.352 1.304a6.2 6.2 0 0 1-1.248 2.389l-.724.856a1.588 1.588 0 0 0 .803 2.56l10.83 2.903a1.59 1.59 0 0 0 1.976-1.816l-.199-1.104a6.2 6.2 0 0 1 .112-2.692l.35-1.306a5.98 5.98 0 0 0-4.228-7.322"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.71 16.278a.75.75 0 0 1 .53.918 2.425 2.425 0 1 0 4.686 1.255.75.75 0 1 1 1.449.389 3.925 3.925 0 1 1-7.583-2.032.75.75 0 0 1 .918-.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtonePlaying2Outline;
