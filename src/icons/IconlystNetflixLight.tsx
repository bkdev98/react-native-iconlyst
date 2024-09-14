import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNetflixLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.889 6.667 9.511 12.97a.89.89 0 0 0 .717.363h3.105c.49 0 .889-.398.889-.889V4.89A.89.89 0 0 0 18.222 4h-2.963a.89.89 0 0 0-.889.889v5.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.63 13.333v5.778c0 .491-.399.889-.89.889H5.779a.89.89 0 0 1-.89-.889V4.89c0-.491.399-.889.89-.889h3.105c.283 0 .549.135.716.363l9.512 12.97"
    />
  </Svg>
);
export default IconlystNetflixLight;
