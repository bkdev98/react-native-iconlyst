import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSorting0To9Bold = ({
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
      d="M9.96 13.962 9 14.92V6.67a1 1 0 1 0-2 0v8.25l-.96-.958a.999.999 0 1 0-1.412 1.416l2.664 2.658q.107.107.233.174 0 0 .003.002h.003q0 .002.003.003h.002l.003.003h.003l.002.002q.005.001.004.002h.002v.002h.003l.002.002h.002l.003.002c.005 0 .003.002.004.002q.003.001.003.002h.004q0 .001.002.002h.003v.002h.003l.003.002h.003q0 .002.003.003h.003q.014.008.032.015a.989.989 0 0 0 .908-.077l.002-.002.003-.002.003-.001q0-.001.002-.002l.003-.002.002-.001v-.001l.003-.001v-.001l.003-.001v-.001l.004-.001q.001-.003.002-.002v-.001l.003-.001q0 0 .003-.002c.002-.004.002-.002.002-.002l.002-.002.003-.002.002-.001v-.001h.003l.003-.002.002-.002q.06-.044.114-.096l.003-.002.005-.005.002-.002.002-.002 2.666-2.66a.999.999 0 1 0-1.412-1.416M17.667 16.33h-.777a.775.775 0 1 1 0-1.55.77.77 0 0 1 .777.78zm-.777-3.55a2.78 2.78 0 0 0-2.778 2.78 2.777 2.777 0 0 0 2.778 2.77h.769a.78.78 0 0 1-.77.67h-1.261a1 1 0 1 0 0 2h1.262a2.78 2.78 0 0 0 2.777-2.78v-2.66a2.78 2.78 0 0 0-2.777-2.78M17.667 8.439a.77.77 0 0 1-.777.78.77.77 0 0 1-.778-.78V5.78A.78.78 0 0 1 16.89 5a.78.78 0 0 1 .777.78zM16.89 3a2.78 2.78 0 0 0-2.778 2.78v2.659a2.78 2.78 0 0 0 2.778 2.78 2.78 2.78 0 0 0 2.777-2.78V5.78A2.78 2.78 0 0 0 16.89 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSorting0To9Bold;
