import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.407 12.007h.895l4.368 7.327-.558.73H5.636l-.462-.76 2.69-4.98h.742l2.938 1.482zm.354 2.022-2.774 3.681-3.338-1.684-1.37 2.538h10.186zM8.757 8.045a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34m-2.67 1.17a2.67 2.67 0 0 1 2.67-2.67h.001a2.67 2.67 0 1 1-2.671 2.67"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 23.104v-20h20v20zm1.5-1.5h17v-17h-17z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageOutlinesharp;
