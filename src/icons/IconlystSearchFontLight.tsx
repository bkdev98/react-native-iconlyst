import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFontLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 8.603V6.336h12.78v2.267M20.006 17.354l1.495 1.492m-3.517-6.639a2.97 2.97 0 1 1 0 5.941 2.97 2.97 0 0 1 0-5.941M9.829 6.336v12.862m-2.79 0h5.702"
    />
  </Svg>
);
export default IconlystSearchFontLight;
