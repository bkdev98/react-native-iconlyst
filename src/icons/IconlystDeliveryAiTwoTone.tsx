import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryAiTwoTone = ({
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
      d="M20.49 11.408 20.47 7.89c-.007-2.859-1.792-4.875-4.653-4.868l-8.187.02C4.777 3.048 2.993 5.072 3 7.932l.018 7.712c.007 2.86 1.793 4.876 4.654 4.869h2.327"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.493 3.022.016 6.48-2.752-.897-2.768.913-.009-6.472"
      opacity={0.4}
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="m17.894 15.314.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.102a3.76 3.76 0 0 0-2.222 2.224l-.1.274-.102-.274a3.76 3.76 0 0 0-2.222-2.224l-.273-.102.273-.1a3.76 3.76 0 0 0 2.222-2.226zM12.583 14.072a1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.179 1.77 1.77 0 0 0-1.176-1.179 1.77 1.77 0 0 0 1.176-1.178" />
    </G>
  </Svg>
);
export default IconlystDeliveryAiTwoTone;
