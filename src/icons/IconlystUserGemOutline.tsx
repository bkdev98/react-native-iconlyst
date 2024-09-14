import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserGemOutline = ({
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
      d="M14.344 14.84a.75.75 0 0 1 .654-.383h3.748a.75.75 0 0 1 .654.383l.937 1.67a.75.75 0 0 1-.097.869l-2.811 3.123a.75.75 0 0 1-1.115 0l-2.81-3.123a.75.75 0 0 1-.098-.869zm1.093 1.117-.46.818 1.895 2.105 1.893-2.105-.459-.818zM7.038 17.255c-.835.756-1.169 1.719-1.169 2.566a.75.75 0 0 1-1.5 0c0-1.238.49-2.615 1.662-3.678C7.206 15.08 9 14.391 11.505 14.391a.75.75 0 0 1 0 1.5c-2.233 0-3.634.609-4.467 1.364M11.505 4.75a3.33 3.33 0 1 0 0 6.659 3.33 3.33 0 0 0 0-6.659m-4.83 3.33a4.83 4.83 0 1 1 9.66 0 4.83 4.83 0 0 1-9.66 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserGemOutline;
