import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJumpRopeBroken = ({
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
      d="M4.8 19.2a1.8 1.8 0 0 0 3.6 0v-3.6a1.8 1.8 0 0 0-3.6 0v.961M19.2 4.8a1.8 1.8 0 0 0-3.6 0v3.6a1.8 1.8 0 0 0 3.6 0v-.958"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.6 13.8V8.4a2.7 2.7 0 1 1 5.4 0v1.8M17.4 10.2v5.4a2.7 2.7 0 0 1-5.4 0v-2.457"
    />
  </Svg>
);
export default IconlystJumpRopeBroken;
