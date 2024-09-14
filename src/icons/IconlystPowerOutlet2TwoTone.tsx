import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutlet2TwoTone = ({
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
      d="M7.764 9.31a5.054 5.054 0 0 0 5.55 5.03c2.627-.25 4.556-2.607 4.556-5.246V7.567a1.12 1.12 0 0 0-1.12-1.122H8.884c-.62 0-1.121.502-1.121 1.122z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.275 3.137v3.309M15.357 3.137v3.309M17.357 21.137c0-.74-.613-1.341-1.368-1.341h-1.056c-1.167-.005-2.11-.93-2.117-2.072v-3.197"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPowerOutlet2TwoTone;
