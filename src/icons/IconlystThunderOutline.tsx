import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThunderOutline = ({
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
      d="M12.514 21.755c-.18 0-.37-.03-.55-.09-.73-.24-1.21-.89-1.21-1.67v-5.04h-4.73c-.66 0-1.26-.36-1.55-.95-.3-.59-.25-1.28.14-1.82l6.7-9.22c.45-.62 1.22-.87 1.95-.63s1.21.89 1.21 1.67v5.04h4.73c.66 0 1.25.36 1.55.95s.25 1.28-.14 1.82l-6.7 9.22c-.34.47-.85.72-1.4.72m.2-18.01c-.06 0-.13.02-.19.1l-6.69 9.22c-.08.11-.05.21-.02.26s.09.13.22.13h5.48c.41 0 .75.34.75.75v5.79c0 .15.09.21.17.24s.19.03.27-.09l6.69-9.22c.08-.11.05-.21.02-.26a.24.24 0 0 0-.22-.13h-5.48c-.41 0-.75-.34-.75-.75v-5.79c0-.15-.09-.21-.17-.24-.03 0-.06-.01-.09-.01z"
    />
  </Svg>
);
export default IconlystThunderOutline;
