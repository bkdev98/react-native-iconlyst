import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnectOutline = ({
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
      d="M3.717 10.784a2.696 2.696 0 0 1 2.696-2.696h11.675a2.696 2.696 0 0 1 2.696 2.696v1.965a2.696 2.696 0 0 1-2.696 2.696H6.413a2.696 2.696 0 0 1-2.696-2.696zm2.696-1.196c-.66 0-1.196.535-1.196 1.196v1.965c0 .66.535 1.196 1.196 1.196h11.675c.66 0 1.196-.536 1.196-1.196v-1.965c0-.66-.535-1.196-1.196-1.196z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.717 4.927a2.696 2.696 0 0 1 2.696-2.696h11.675a2.696 2.696 0 0 1 2.696 2.696v1.965a2.696 2.696 0 0 1-2.696 2.696H6.413a2.696 2.696 0 0 1-2.696-2.696zm2.696-1.196c-.66 0-1.196.536-1.196 1.196v1.965c0 .66.535 1.196 1.196 1.196h11.675c.66 0 1.196-.535 1.196-1.196V4.927c0-.66-.535-1.196-1.196-1.196z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.123 5.91a.75.75 0 0 1 .75-.75h.487a.75.75 0 1 1 0 1.5h-.487a.75.75 0 0 1-.75-.75M7.123 11.767a.75.75 0 0 1 .75-.75h.487a.75.75 0 0 1 0 1.5h-.487a.75.75 0 0 1-.75-.75M12.235 18.526a.86.86 0 0 0-.856.862c0 .478.385.861.856.861s.857-.383.857-.861a.86.86 0 0 0-.857-.862m-2.356.862a2.36 2.36 0 0 1 2.356-2.362 2.36 2.36 0 0 1 2.357 2.362 2.36 2.36 0 0 1-2.357 2.361 2.36 2.36 0 0 1-2.356-2.361"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.244 19.389a.75.75 0 0 1 .75-.75h4.634a.75.75 0 0 1 0 1.5H5.994a.75.75 0 0 1-.75-.75m8.597-.75h4.634a.75.75 0 1 1 0 1.5H13.84a.75.75 0 0 1 0-1.5M13 14.714v3.043h-1.5v-3.043z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServersConnectOutline;
