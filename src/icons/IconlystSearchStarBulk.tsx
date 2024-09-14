import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchStarBulk = ({
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
      d="M11.135 2.5a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.99 19.795-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416M13.576 11.888l1.02-.98c.37-.36.41-.93.12-1.3a.98.98 0 0 0-.68-.41l-1.41-.2-.63-1.28-.01-.01c-.11-.21-.28-.38-.46-.45-.23-.11-.5-.13-.83-.02-.29.13-.44.33-.51.47l-.63 1.28-1.44.21c-.21.04-.4.13-.55.28-.38.39-.38 1.02.01 1.43l1.03.98-.25 1.41c-.03.21 0 .42.11.63.25.48.83.67 1.36.42l1.27-.67 1.23.65c.16.09.33.13.5.13.05 0 .11 0 .16-.01a1 1 0 0 0 .83-1.16zm-2.49-2.62.32.64c.14.26.39.45.75.53l.67.1-.48.46c-.25.24-.36.59-.29.9l.11.65-.6-.31c-.3-.16-.65-.16-.94-.01l-.61.33.11-.66a.99.99 0 0 0-.29-.9l-.48-.46.73-.11c.31-.07.57-.28.7-.55z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchStarBulk;
