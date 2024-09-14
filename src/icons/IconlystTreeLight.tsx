import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3c4.6 0 5.414 8.206 5.396 9.029.01.37.258 5.358-5.396 5.358-5.655 0-5.398-5.359-5.398-5.359C6.584 11.207 7.398 3 12 3M9.875 10.734l2.023 2.024M12.1 14.062l2.023-2.023M11.998 9.976V21"
    />
  </Svg>
);
export default IconlystTreeLight;
