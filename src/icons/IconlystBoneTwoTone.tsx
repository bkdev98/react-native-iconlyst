import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoneTwoTone = ({
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
      d="m19.139 14.867.933.933M20.133 12.02h1.777M6.684 9.13l-.934-.935M5.687 12.02H3.91M19.139 9.13l.933-.935M6.684 14.867l-.934.933"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.074 3.455v3.302a2.03 2.03 0 1 0 0 4.062c.815 0 1.513-.484 1.837-1.178a2.03 2.03 0 0 0 1.836 1.178 2.031 2.031 0 0 0 0-4.062l-.016.002V3.453l.016.002M11.074 20.543v-3.302a2.03 2.03 0 1 1 0-4.061c.815 0 1.513.483 1.837 1.177a2.03 2.03 0 0 1 1.836-1.177 2.03 2.03 0 0 1 0 4.06l-.016-.001v3.305h.016"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBoneTwoTone;
