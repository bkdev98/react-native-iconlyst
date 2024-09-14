import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnBroken = ({
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
      d="M12.001 20.224h-5.54c-2.75 0-4.461-1.942-4.461-4.69V8.416c0-2.747 1.719-4.688 4.461-4.688h11.082c2.75 0 4.461 1.941 4.461 4.688v7.12c0 2.747-1.711 4.689-4.462 4.689H15.99"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.078 11.999c0 1.315-.95 2.381-2.122 2.381S6.834 13.314 6.834 12s.95-2.382 2.122-2.382 2.122 1.066 2.122 2.382M13.76 14.26V9.582l3.458 4.58v-4.58"
    />
  </Svg>
);
export default IconlystOnBroken;
