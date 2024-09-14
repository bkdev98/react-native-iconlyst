import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.807 18.331a3.84 3.84 0 0 1 0-5.427l.852-.853a.76.76 0 0 1 1.076 0l4.352 4.351a.76.76 0 0 1 0 1.076l-.853.853a3.84 3.84 0 0 1-5.427 0M5.803 18.332 3 21.135"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M18.194 5.944a3.84 3.84 0 0 0-5.428 0l-.853.853a.76.76 0 0 0 0 1.076l4.352 4.352a.76.76 0 0 0 1.075 0l.854-.853a3.84 3.84 0 0 0 0-5.428M18.197 5.94 21 3.137" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.496 12.81 1.681-1.681m1.15 4.512 1.681-1.681"
    />
  </Svg>
);
export default IconlystConnectingCableTwoTone;
