import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodepenBulk = ({
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
      d="M5.843 12.246a.3.3 0 0 0 0-.492 969 969 0 0 1-2.87-2.028.3.3 0 0 0-.473.245v4.058a.3.3 0 0 0 .473.246c.685-.486 1.971-1.398 2.87-2.029M18.16 11.753a.3.3 0 0 0 0 .492c.898.63 2.183 1.54 2.868 2.027a.3.3 0 0 0 .472-.246V9.972a.3.3 0 0 0-.472-.246c-.685.486-1.97 1.396-2.868 2.027M11.252 15.697a.3.3 0 0 0-.128-.245l-3.45-2.416a.3.3 0 0 0-.344-.002 565 565 0 0 1-3.767 2.583.3.3 0 0 0 .006.499l7.242 4.706a.3.3 0 0 0 .463-.251c-.006-1.083-.02-3.488-.022-4.874M16.672 13.033a.3.3 0 0 0-.343.001l-3.45 2.415a.3.3 0 0 0-.127.245c-.001 1.399-.015 3.795-.022 4.874a.3.3 0 0 0 .464.252l7.236-4.704a.3.3 0 0 0 .006-.499c-.808-.552-2.738-1.87-3.764-2.584"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M20.439 8.385a.3.3 0 0 0-.007-.5l-7.238-4.703a.3.3 0 0 0-.464.251c.007 1.08.02 3.476.022 4.871a.3.3 0 0 0 .128.245l3.449 2.415a.3.3 0 0 0 .343.002c1.024-.713 2.956-2.03 3.767-2.58M7.33 10.967c.104.072.24.071.343-.001l3.451-2.416a.3.3 0 0 0 .128-.245c.001-1.401.015-3.796.022-4.875a.3.3 0 0 0-.464-.252L3.57 7.886a.3.3 0 0 0-.007.499c.81.551 2.742 1.868 3.768 2.582M12.174 9.886a.3.3 0 0 0-.344 0l-2.671 1.87a.3.3 0 0 0 0 .492l2.669 1.867a.3.3 0 0 0 .344 0l2.67-1.87a.3.3 0 0 0 0-.49z" />
    </G>
  </Svg>
);
export default IconlystCodepenBulk;
