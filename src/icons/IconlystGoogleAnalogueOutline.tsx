import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAnalogueOutline = ({
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
      d="M13.719 6.02a1.977 1.977 0 0 0-3.424 1.977l5.766 9.987a1.977 1.977 0 1 0 3.424-1.977zm-3.45-2.022a3.477 3.477 0 0 1 4.749 1.272l5.766 9.987a3.477 3.477 0 1 1-6.022 3.477L8.996 8.747a3.477 3.477 0 0 1 1.272-4.75M3.216 15.255a3.477 3.477 0 1 1 6.023 3.477 3.477 3.477 0 0 1-6.023-3.477m4 .026a1.977 1.977 0 1 0-1.977 3.424 1.977 1.977 0 0 0 1.977-3.424"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAnalogueOutline;
