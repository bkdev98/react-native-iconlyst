import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHide3Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.935 7.755a.75.75 0 0 1 .995.366c2.932 6.352 11.706 6.352 14.638 0a.75.75 0 0 1 1.362.629c-3.468 7.514-13.894 7.514-17.362 0a.75.75 0 0 1 .367-.995"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.553 11.368a.75.75 0 0 1 .165 1.048L4.86 16.345a.75.75 0 1 1-1.212-.883l2.859-3.929a.75.75 0 0 1 1.047-.165M16.952 11.368a.75.75 0 0 1 1.048.165l2.858 3.93a.75.75 0 1 1-1.213.882l-2.858-3.93a.75.75 0 0 1 .165-1.047M12.249 12.889a.75.75 0 0 1 .75.75v3.866a.75.75 0 0 1-1.5 0v-3.866a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHide3Outline;
