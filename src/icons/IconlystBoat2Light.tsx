import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 16.188h18l-2.49 4.028a1.76 1.76 0 0 1-1.497.833H6.24a1.76 1.76 0 0 1-1.618-1.068zM17.395 13.715c.606-7.783-7.278-10.268-7.278-10.268.866 3.98.655 7.388-.54 10.12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoat2Light;
