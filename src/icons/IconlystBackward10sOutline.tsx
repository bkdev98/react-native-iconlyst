import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward10sOutline = ({
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
      fillRule="evenodd"
      d="M12.834 4.5a7.5 7.5 0 0 0-7.498 7.33.75.75 0 0 1-1.5-.034A9 9 0 0 1 21.833 12a9 9 0 0 1-16.409 5.11.75.75 0 0 1 1.235-.853A7.5 7.5 0 1 0 12.834 4.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.71 9.151a.75.75 0 0 1 1.024.275l.905 1.57 1.558-.898a.75.75 0 0 1 .75 1.3L4.739 12.67a.75.75 0 0 1-1.024-.275l-1.28-2.22a.75.75 0 0 1 .274-1.025M10.293 8.637a.75.75 0 0 1 .75.75v5.224a.75.75 0 0 1-1.5 0V9.388a.75.75 0 0 1 .75-.75M14.55 10.04a.856.856 0 0 0-.855.855v2.213a.856.856 0 0 0 1.711 0v-2.213a.856.856 0 0 0-.855-.856m-2.355.855a2.356 2.356 0 1 1 4.711 0v2.213a2.356 2.356 0 0 1-4.71 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward10sOutline;
