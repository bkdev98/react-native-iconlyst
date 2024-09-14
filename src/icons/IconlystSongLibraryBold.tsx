import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongLibraryBold = ({
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
      d="M14.873 14.035v-.006a1.284 1.284 0 0 0-1.282-1.277 1.283 1.283 0 0 0 0 2.565c.707 0 1.281-.574 1.282-1.28zM7.35 2.289c-3.062.199-5.1 2.44-5.1 5.737v7.949c0 3.297 2.038 5.538 5.1 5.737z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.307 9.745a.75.75 0 0 1-.884.586 3.2 3.2 0 0 1-1.05-.414v4.107l.001.01a2.787 2.787 0 0 1-2.783 2.783 2.786 2.786 0 0 1-2.782-2.783 2.785 2.785 0 0 1 2.782-2.782c.465 0 .897.125 1.282.327V7.934a.75.75 0 0 1 1.451-.269c.014.035.412.996 1.397 1.196a.75.75 0 0 1 .586.884M16.216 2.25H8.85v19.5h7.367c3.31 0 5.533-2.321 5.533-5.776V8.026c0-3.455-2.224-5.776-5.534-5.776"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongLibraryBold;
