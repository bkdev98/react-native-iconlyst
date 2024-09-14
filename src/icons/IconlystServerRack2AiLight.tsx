import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack2AiLight = ({
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
      d="M7.689 14.093h-2.25c-1.43 0-2.439.89-2.439 2.32v2.18c0 1.432 1.01 2.321 2.44 2.321h7.658M21 5.406v2.18c0 1.431-1.01 2.321-2.44 2.321H5.44c-1.43 0-2.44-.89-2.44-2.32v-2.18c0-1.43 1.01-2.321 2.44-2.321h13.12c1.43 0 2.44.894 2.44 2.32M6.588 17.504h.974M6.588 6.497h.974M18.108 15.121l.112.305a4.2 4.2 0 0 0 2.476 2.479l.304.113-.304.112a4.2 4.2 0 0 0-2.476 2.48l-.112.304-.113-.305a4.2 4.2 0 0 0-2.476-2.479l-.304-.112.305-.113a4.2 4.2 0 0 0 2.475-2.48zM12.62 13.196c.19.629.683 1.121 1.31 1.313a1.97 1.97 0 0 0-1.31 1.313 1.97 1.97 0 0 0-1.312-1.313 1.97 1.97 0 0 0 1.312-1.313"
    />
  </Svg>
);
export default IconlystServerRack2AiLight;
