import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeBluetoothBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.399 9.344c.108-.517.294-.956.613-1.223.772-.642 1.231-.477 2.634-.581.376 0 .817-.106 1.136-.306l2.75-1.719c1.65-1.03 3.664.207 3.78 2.129a60 60 0 0 1 0 8.713c-.1 1.919-2.13 3.16-3.78 2.128l-2.75-1.718c-.32-.2-.754-.306-1.13-.306-1.41-.106-1.863.06-2.64-.581-.74-.62-.764-2.173-.762-3.462M16.898 10.416 18.878 12m0 0 2.372 1.898-2.372 1.902v-1.493m0-2.307v-.004l2.372-1.898-2.372-1.897v1.14m0 2.659-1.98 1.58"
    />
  </Svg>
);
export default IconlystVolumeBluetoothBroken;
