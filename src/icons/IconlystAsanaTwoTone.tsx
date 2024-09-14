import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAsanaTwoTone = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M6.373 13.16a3.376 3.376 0 1 0 .006 6.752 3.376 3.376 0 0 0-.006-6.752ZM17.622 13.16a3.376 3.376 0 1 0 .005 6.752 3.376 3.376 0 0 0-.005-6.752Z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M11.997 4.09a3.376 3.376 0 1 0 .006 6.752 3.376 3.376 0 0 0-.006-6.752Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAsanaTwoTone;
