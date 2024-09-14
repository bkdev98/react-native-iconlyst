import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchStarBold = ({
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
      d="m11.406 9.908-.32-.64-.3.61c-.13.27-.39.48-.7.55l-.73.11.48.46c.25.25.35.57.29.9l-.11.66.61-.33c.29-.15.64-.15.94.01l.6.31-.11-.65c-.07-.31.04-.66.29-.9l.48-.46-.67-.1c-.36-.08-.61-.27-.75-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.596 10.908-1.02.98.24 1.4a1 1 0 0 1-.83 1.16c-.05.01-.11.01-.16.01-.17 0-.34-.04-.5-.13l-1.23-.65-1.27.67c-.53.25-1.11.06-1.36-.42-.11-.21-.14-.42-.11-.63l.25-1.41-1.03-.98a1.03 1.03 0 0 1-.01-1.43c.15-.15.34-.24.55-.28l1.44-.21.63-1.28c.07-.14.22-.34.51-.47.33-.11.6-.09.83.02.18.07.35.24.46.45l.01.01.63 1.28 1.41.2c.28.04.52.18.68.41.29.37.25.94-.12 1.3m-3.47-8.41c-4.64 0-8.41 3.77-8.41 8.42s3.77 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84M20.99 19.794l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchStarBold;
