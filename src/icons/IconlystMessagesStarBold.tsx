import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesStarBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.637 11.728-.333-.669-.334.67a1.17 1.17 0 0 1-.886.634l-.729.105.525.505c.281.273.407.662.34 1.043l-.125.72.666-.348a1.18 1.18 0 0 1 1.084 0l.668.347-.126-.723a1.17 1.17 0 0 1 .338-1.037l.527-.507-.734-.106a1.16 1.16 0 0 1-.88-.634"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.783 13.076-.888.855.21 1.204a1.18 1.18 0 0 1-.966 1.354 1.2 1.2 0 0 1-.737-.121l-1.098-.571-1.104.574a1.15 1.15 0 0 1-.89.08 1.16 1.16 0 0 1-.689-.571 1.18 1.18 0 0 1-.119-.741l.21-1.21-.887-.852a1.17 1.17 0 0 1 .648-1.997l1.232-.177.55-1.102a1.18 1.18 0 0 1 1.591-.513 1.18 1.18 0 0 1 .507.513l.548 1.1 1.234.179a1.17 1.17 0 0 1 .648 1.996m3.236-6.987a9.41 9.41 0 0 0-6.716-2.79c-2.54 0-4.927.99-6.72 2.79-2.805 2.816-3.57 7.137-1.913 10.729.191.476.316.809.316 1.092 0 .333-.14.749-.278 1.15-.265.779-.565 1.662.078 2.309.647.648 1.531.343 2.311.074.397-.137.808-.278 1.132-.28.293 0 .658.147 1.081.318a9.44 9.44 0 0 0 3.97.87 9.52 9.52 0 0 0 6.74-2.785c3.703-3.717 3.703-9.762 0-13.477"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesStarBold;
