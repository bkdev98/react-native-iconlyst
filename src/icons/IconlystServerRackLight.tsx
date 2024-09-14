import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRackLight = ({
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
      d="M21 16.413v2.18c0 1.432-1.01 2.321-2.44 2.321H5.44c-1.43 0-2.44-.889-2.44-2.32v-2.18c0-1.431 1.01-2.321 2.44-2.321h13.12c1.43 0 2.44.894 2.44 2.32M16.285 20.906v-6.817M6.588 17.503h.974M21 5.406v2.18c0 1.431-1.01 2.321-2.44 2.321H5.44c-1.43 0-2.44-.89-2.44-2.32v-2.18c0-1.43 1.01-2.321 2.44-2.321h13.12c1.43 0 2.44.894 2.44 2.32M16.285 9.907V3.09M6.588 6.497h.974"
    />
  </Svg>
);
export default IconlystServerRackLight;
