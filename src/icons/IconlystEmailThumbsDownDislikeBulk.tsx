import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailThumbsDownDislikeBulk = ({
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
      d="M17.575 2.165h-8.8c-2.9 0-5.1 2.4-5.1 5.5v5.129c0 .213.218.36.425.305.47-.125.915-.134 1.375-.134h2.2c.557 0 1.187 0 1.914.362.56.278.887.605 1.045.761.592.595.827 1.312.966 1.871l.179.621c.206.719.432 1.522.283 2.392-.033.198.11.393.312.393h5.201c1.3 0 2.5-.5 3.5-1.4 1-1 1.6-2.5 1.6-4.1v-6.2c0-3.1-2.2-5.5-5.1-5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.875 8.565-4 3.2q-.75.6-1.8.6-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.3.4.3.9-.1 1.2M9.739 16.074c-.11-.44-.233-.71-.398-.874-.107-.106-.241-.241-.498-.371-.28-.14-.54-.14-.968-.14h-2.2c-.541 0-.788 0-1.068.14-.258.13-.414.28-.545.525-.162.21-.162.529-.162 1.111v2.4c0 .147.06.248.112.313.042.197.188.341.298.453.49.488 1.288 1.387 1.8 1.999.176.177.369.206.603.206l.136-.003a.98.98 0 0 0 .666-.473c.246-.415.257-1.046.03-1.92h.33c.804 0 1.187 0 1.567-.237.439-.165.586-.508.689-.819.137-.413.015-.884-.195-1.623zM2.075 14.815a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailThumbsDownDislikeBulk;
