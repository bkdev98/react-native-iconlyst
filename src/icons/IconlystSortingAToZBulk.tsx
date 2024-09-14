import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortingAToZBulk = ({
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
      d="M18.999 19h-2.01l2.842-4.266a.998.998 0 0 0-.832-1.554h-3.878a1 1 0 1 0 0 2h2.01l-2.842 4.265A1 1 0 0 0 15.121 21h3.878a1 1 0 1 0 0-2M16.628 7.633l.433-1.037.432 1.037zm3.784 1.802-2.428-5.82a1 1 0 0 0-1.846 0l-2.43 5.82a1 1 0 1 0 1.847.77l.238-.572h2.535l.239.572a1 1 0 0 0 1.307.538 1 1 0 0 0 .538-1.308"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.622 13.963 8.42 15.165V5.938a1 1 0 1 0-2 0v9.226l-1.202-1.202a.999.999 0 1 0-1.414 1.414l2.909 2.91h.001l.001.002.003.002.001.002.006.006h.001v.002h.001l.003.004h.001l.002.003h.002l.002.003h.001l.005.006h.002l.002.003.003.002.002.002q.138.121.299.185l.001.002q.161.063.343.069h.001c.002-.002.016 0 .024 0s.025-.002.023 0a1 1 0 0 0 .645-.256l.002-.003.002-.002.003-.002h.002l.003-.003.001-.003q.002-.004.003-.003h.002l.002-.003.004-.003.001-.002.008-.008h.001l.003-.004h.001l.001-.002 2.909-2.91a.999.999 0 1 0-1.414-1.413"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSortingAToZBulk;
