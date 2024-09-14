import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneAddBold = ({
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
      d="M13.955 10.463h-1.2v1.21a.749.749 0 1 1-1.5 0v-1.21h-1.21a.749.749 0 1 1 0-1.5h1.21v-1.21a.749.749 0 1 1 1.5 0v1.21h1.2c.42 0 .75.33.75.75 0 .41-.33.75-.75.75m5.09.66c-.4-.69-.78-1.35-.78-2.9 0-2.82-2.51-5.85-6.26-5.85s-6.27 3.03-6.27 5.85c0 1.55-.38 2.21-.78 2.91-.39.67-.79 1.37-.79 2.74v.04c.26 3.12 3.07 3.73 7.84 3.73 4.76 0 7.57-.61 7.83-3.77 0-1.37-.4-2.07-.79-2.75M14.138 19.102h-4.2a.752.752 0 0 0-.587 1.219 3.43 3.43 0 0 0 2.682 1.306 3.44 3.44 0 0 0 2.691-1.306.75.75 0 0 0-.586-1.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneAddBold;
