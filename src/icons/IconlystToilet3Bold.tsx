import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet3Bold = ({
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
      d="M18.488 13.649a.75.75 0 0 1-1.5 0v-3.84a.75.75 0 0 1 1.5 0zm-2.364-3.212-.656 4.819a3.516 3.516 0 0 1-3.469 3.034 3.515 3.515 0 0 1-3.467-3.034l-.656-4.819a4.15 4.15 0 0 1 .985-3.293 4.167 4.167 0 0 1 6.276 0 4.15 4.15 0 0 1 .986 3.293m-9.12 3.212a.75.75 0 0 1-1.5 0v-3.84a.75.75 0 0 1 1.5 0zM15.627 2.5H8.37c-2.76 0-4.616 1.936-4.616 4.819v9.36c0 2.883 1.855 4.821 4.616 4.821h7.258c2.76 0 4.615-1.938 4.615-4.821v-9.36c0-2.883-1.854-4.819-4.616-4.819"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.002 8.45a1.151 1.151 0 0 0 0 2.3 1.151 1.151 0 0 0 0-2.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToilet3Bold;
