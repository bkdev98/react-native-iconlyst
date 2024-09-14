import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrameOutline = ({
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
      d="M4.75 3.75A.75.75 0 0 0 4 4.5v5.823l.67 1.342a.75.75 0 0 1 .08.335v6.75a.75.75 0 0 0 .75.75h6.75a.75.75 0 0 1 .335.08l1.342.67h5.823a.75.75 0 0 0 .75-.75v-5.823l-.67-1.342a.75.75 0 0 1-.08-.335V5.25A.75.75 0 0 0 19 4.5h-6.75a.75.75 0 0 1-.335-.08l-1.342-.67zm-1.591-.841A2.25 2.25 0 0 1 4.75 2.25h6a.75.75 0 0 1 .335.08l1.342.67H19a2.25 2.25 0 0 1 2.25 2.25v6.573l.67 1.342a.75.75 0 0 1 .08.335v6a2.25 2.25 0 0 1-2.25 2.25h-6a.75.75 0 0 1-.335-.08L12.073 21H5.5a2.25 2.25 0 0 1-2.25-2.25v-6.573l-.67-1.342a.75.75 0 0 1-.08-.335v-6c0-.597.237-1.169.659-1.591"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.938 8.438a.75.75 0 0 1 .75-.75h7.124a.75.75 0 0 1 .75.75v7.124a.75.75 0 0 1-.75.75H8.689a.75.75 0 0 1-.75-.75zm1.5.75v5.624h5.624V9.189z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFrameOutline;
