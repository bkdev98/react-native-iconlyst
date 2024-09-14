import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleFormsTwoTone = ({
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
      d="M14.238 3.094v3.462a1.5 1.5 0 0 0 1.5 1.5H19.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.8 21a2 2 0 0 1-2-2V5a2 2 0 0 1 1.999-2h7.047c.53 0 1.036.21 1.411.586l3.357 3.357c.375.375.586.879.586 1.409v10.65a2 2 0 0 1-2 1.998z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.79 11.367h4.722m-4.723 2.7h4.723m-4.723 2.7h4.723M8.497 11.367h-.01m.01 2.7h-.01m.01 2.7h-.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGoogleFormsTwoTone;
