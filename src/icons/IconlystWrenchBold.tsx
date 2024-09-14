import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWrenchBold = ({
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
      d="M10.013 21.5h5.924a.5.5 0 0 0 .5-.5v-3.473a8.15 8.15 0 0 0 4.737-7.427 8.16 8.16 0 0 0-5.046-7.562.5.5 0 0 0-.691.462v6.071a.5.5 0 0 1-.306.461l-1.956.823a.5.5 0 0 1-.389.001l-1.967-.825a.5.5 0 0 1-.306-.46V3a.5.5 0 0 0-.223-.418.5.5 0 0 0-.47-.044A8.19 8.19 0 0 0 4.787 10.1a8.18 8.18 0 0 0 4.726 7.425V21a.5.5 0 0 0 .5.5"
    />
  </Svg>
);
export default IconlystWrenchBold;
