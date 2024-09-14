import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortingZToABold = ({
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
      d="M9.622 13.963 8.42 15.165V5.938a1 1 0 1 0-2 0v9.226l-1.202-1.202a.999.999 0 1 0-1.414 1.414l2.909 2.91h.001l.001.002.003.002.001.002.006.006h.001v.002h.001l.003.004h.001l.002.003h.002l.002.003h.001l.005.006h.002l.002.003q.002 0 .003.002l.002.002a1 1 0 0 0 .643.255h.001c.002-.002.016 0 .024 0s.025-.002.023 0a1 1 0 0 0 .645-.256l.002-.002q.002 0 .002-.002 0 0 .003-.002h.002l.003-.003.001-.003q.002-.004.003-.003h.002q.001-.003.002-.003l.004-.003.001-.002.008-.008h.001l.003-.004h.001l.001-.002 2.91-2.91a.999.999 0 1 0-1.415-1.413M16.63 17.809l.43-1.033.432 1.033zm3.782 1.806-2.428-5.82a1 1 0 0 0-1.846 0l-2.43 5.82a1 1 0 0 0 1.847.77l.24-.576h2.53l.242.576a1 1 0 1 0 1.845-.77M15.121 5h2.01L14.29 9.266a.998.998 0 0 0 .832 1.554H19a1 1 0 1 0 0-2h-2.01l2.842-4.265A1 1 0 0 0 19 3h-3.878a1 1 0 1 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortingZToABold;
