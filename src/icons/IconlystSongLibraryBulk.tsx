import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongLibraryBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.92 2.289c-3.062.199-5.1 2.44-5.1 5.737v7.949c0 3.297 2.038 5.538 5.1 5.737zM16.786 2.25H9.42v19.5h7.367c3.31 0 5.533-2.321 5.533-5.776V8.026c0-3.455-2.224-5.776-5.534-5.776" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.877 9.745a.75.75 0 0 1-.884.586 3.2 3.2 0 0 1-1.05-.414v4.107l.001.01a2.787 2.787 0 0 1-2.783 2.783 2.786 2.786 0 0 1-2.782-2.783 2.785 2.785 0 0 1 2.782-2.782c.465 0 .897.125 1.282.327V7.934a.75.75 0 0 1 1.451-.269c.014.035.412.996 1.397 1.196a.75.75 0 0 1 .586.884m-3.434 4.284v.008a1.283 1.283 0 1 1 0-.008"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongLibraryBulk;
