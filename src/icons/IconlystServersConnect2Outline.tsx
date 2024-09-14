import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnect2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.716 11.785c0-2.03 1.64-3.679 3.669-3.679h9.73a3.674 3.674 0 0 1 3.668 3.679c0 2.03-1.64 3.678-3.669 3.678h-9.73a3.674 3.674 0 0 1-3.668-3.678m3.669-2.179a2.174 2.174 0 0 0-2.17 2.179c0 1.205.974 2.178 2.17 2.178h9.73a2.174 2.174 0 0 0 2.168-2.178 2.174 2.174 0 0 0-2.169-2.179zM12.235 18.526a.86.86 0 0 0-.856.862c0 .478.385.861.856.861s.857-.383.857-.861a.86.86 0 0 0-.857-.862m-2.356.862a2.36 2.36 0 0 1 2.356-2.362 2.36 2.36 0 0 1 2.357 2.362 2.36 2.36 0 0 1-2.357 2.361 2.36 2.36 0 0 1-2.356-2.361"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.244 19.388a.75.75 0 0 1 .75-.75h4.634a.75.75 0 0 1 0 1.5H5.994a.75.75 0 0 1-.75-.75m8.597-.75h4.634a.75.75 0 0 1 0 1.5H13.84a.75.75 0 0 1 0-1.5M12.234 13.963a.75.75 0 0 1 .75.75v3.058a.75.75 0 0 1-1.5 0v-3.058a.75.75 0 0 1 .75-.75M7.123 11.785a.75.75 0 0 1 .75-.75h1.46a.75.75 0 1 1 0 1.5h-1.46a.75.75 0 0 1-.75-.75M3.717 5.928c0-2.029 1.64-3.678 3.669-3.678h9.73a3.674 3.674 0 0 1 3.668 3.678c0 2.03-1.64 3.679-3.669 3.679a.75.75 0 0 1 0-1.5 2.174 2.174 0 0 0 2.17-2.179 2.174 2.174 0 0 0-2.17-2.178h-9.73a2.174 2.174 0 0 0-2.168 2.178c0 1.206.973 2.179 2.169 2.179a.75.75 0 0 1 0 1.5 3.674 3.674 0 0 1-3.67-3.679"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.123 5.929a.75.75 0 0 1 .75-.75h1.46a.75.75 0 0 1 0 1.5h-1.46a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServersConnect2Outline;
