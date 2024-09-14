import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapHorizontalCircleOutline = ({
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
      d="M10.797 12.423a.75.75 0 0 1-.003 1.06l-.463.46h4.974a.75.75 0 0 1 0 1.5h-4.973l.462.46a.75.75 0 0 1-1.058 1.064l-1.751-1.742a.75.75 0 0 1 0-1.063l1.751-1.742a.75.75 0 0 1 1.06.003M13.207 7.038a.75.75 0 0 1 1.06-.003l1.753 1.742a.75.75 0 0 1 0 1.063l-1.752 1.742a.75.75 0 0 1-1.058-1.064l.462-.46h-4.97a.75.75 0 1 1 0-1.5h4.971l-.463-.46a.75.75 0 0 1-.003-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapHorizontalCircleOutline;
