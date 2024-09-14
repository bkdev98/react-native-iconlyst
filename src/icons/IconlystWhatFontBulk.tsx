import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatFontBulk = ({
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
      d="m7.266 14.136 1.598-3.66 1.598 3.66zm2.515-6.56a1.002 1.002 0 0 0-1.833 0l-4.864 11.14a1 1 0 0 0 .916 1.4 1 1 0 0 0 .917-.6l1.476-3.38h4.942l1.476 3.38a.995.995 0 0 0 1.316.516 1 1 0 0 0 .517-1.316z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.243 3.883c-1.867 0-3.757 1.245-3.757 3.625a1 1 0 1 0 2 0c0-1.58 1.577-1.625 1.757-1.625.48 0 .934.153 1.25.42.336.285.507.69.507 1.205 0 .758-.28 1.008-.837 1.507-.704.63-1.669 1.494-1.669 3.514a1 1 0 0 0 2 0c0-1.125.4-1.483 1.003-2.025C20.132 9.937 21 9.159 21 7.508c0-2.38-1.89-3.625-3.757-3.625M17.494 14.328c-.695 0-1.26.565-1.26 1.26 0 .694.565 1.26 1.26 1.26s1.26-.566 1.26-1.26-.565-1.26-1.26-1.26" />
    </G>
  </Svg>
);
export default IconlystWhatFontBulk;
