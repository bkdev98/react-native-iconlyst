import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiMacbookTwoTone = ({
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
      d="M3.5 16.417v.507a2.43 2.43 0 0 0 2.429 2.428h13.143a2.43 2.43 0 0 0 2.428-2.428v-.507a.55.55 0 0 0-.55-.55H4.05a.55.55 0 0 0-.55.55"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.168 15.867V7.66a3.01 3.01 0 0 0-3.011-3.013H7.84a3.01 3.01 0 0 0-3.012 3.013v8.206"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.528 12.992 2.391-5.467 2.46 5.467"
    />
    <Path stroke={props.color} strokeWidth={1.5} d="M9.168 11.584h3.57" />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.017 12.99V7.725"
    />
  </Svg>
);
export default IconlystAiMacbookTwoTone;
