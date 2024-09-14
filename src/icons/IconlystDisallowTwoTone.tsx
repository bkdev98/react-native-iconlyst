import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDisallowTwoTone = ({
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
      d="M6.153 15.541a7 7 0 0 1-.13-1.253l.001-6.965c0-.912.774-1.694 1.696-1.694.912 0 1.694.774 1.694 1.695v3.525M16.15 5.81a1.696 1.696 0 0 0-3.345.388v1.785"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.802 8V4.695a1.695 1.695 0 1 0-3.39 0v6.15"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.195 14.1v-2.452c0-1.189.963-2.152 2.151-2.152.68 0 1.23.55 1.23 1.23l-.002 3.563A6.776 6.776 0 0 1 7.172 18M20.071 5 4.801 20.27M16.191 14.107V9"
    />
  </Svg>
);
export default IconlystDisallowTwoTone;
