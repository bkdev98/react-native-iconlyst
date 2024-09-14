import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionMarkLight = ({
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
      d="M11.592 19v-.071M11.592 14.928c-.019-1.488 1.333-2.12 2.34-2.692 1.226-.678 2.057-1.754 2.057-3.248A3.984 3.984 0 0 0 12.001 5a3.976 3.976 0 0 0-3.99 3.988"
    />
  </Svg>
);
export default IconlystQuestionMarkLight;
