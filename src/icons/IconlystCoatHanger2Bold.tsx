import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger2Bold = ({
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
      d="M20 16.81a.74.74 0 0 1-.739.74H4.74a.74.74 0 0 1-.74-.74v-.65c0-.3.182-.57.46-.685l7.557-3.076 7.522 3.075a.74.74 0 0 1 .461.685zm.298-3.187-7.202-2.944a.3.3 0 0 1 .092-.069c1.531-.6 2.349-2.264 1.901-3.872a3.18 3.18 0 0 0-2.212-2.175 3.21 3.21 0 0 0-2.802.548A3.17 3.17 0 0 0 8.828 7.64a1 1 0 1 0 2 0 1.199 1.199 0 0 1 1.537-1.143c.374.1.695.415.799.781a1.2 1.2 0 0 1-.711 1.473 2.24 2.24 0 0 0-1.405 1.884l-7.346 2.99A2.735 2.735 0 0 0 2 16.16v.65a2.743 2.743 0 0 0 2.74 2.74h14.521A2.743 2.743 0 0 0 22 16.81v-.65a2.74 2.74 0 0 0-1.702-2.536"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoatHanger2Bold;
