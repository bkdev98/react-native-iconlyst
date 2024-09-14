import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextHeighBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.791 3.857v5.648M9.79 17.152v-4.324m-2.883 4.324h5.894M19.218 10.998l2.032 2.032m-2.032-2.032-2.032 2.032m2.032-2.032v9.145m0 0-2.032-2.032m2.032 2.032 2.032-2.032M3.25 6.2V3.858h13.21v2.344"
    />
  </Svg>
);
export default IconlystTextHeighBroken;
