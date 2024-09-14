import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOilCanisterOutline = ({
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
      d="M12.208 6.387a.75.75 0 0 1 .75-.75h3.757a.75.75 0 1 1 0 1.5h-3.757a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.897 3.362a3.74 3.74 0 0 1 2.414-.883h4.431a3.74 3.74 0 0 1 3.739 3.738v11.794a3.74 3.74 0 0 1-3.739 3.739H7.758a3.74 3.74 0 0 1-3.738-3.739v-7.944c0-1.1.484-2.145 1.324-2.855zm2.414.617c-.53 0-1.041.187-1.445.529l-4.553 3.85a2.24 2.24 0 0 0-.793 1.709v7.944a2.24 2.24 0 0 0 2.238 2.239h8.984a2.24 2.24 0 0 0 2.239-2.239V6.217a2.24 2.24 0 0 0-2.239-2.238z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.11 3.939a.645.645 0 0 0-.871-.037l-1.361 1.15a.645.645 0 0 0-.04.949l.892.891a.75.75 0 0 1-1.061 1.06l-.891-.89a2.145 2.145 0 0 1 .131-3.155l1.361-1.15a2.145 2.145 0 0 1 2.901.121l-.53.53.53-.53 1.065 1.065a.75.75 0 1 1-1.06 1.06zM16.442 9.86a.75.75 0 0 1 0 1.06l-1.81 1.81a.75.75 0 0 1-1.06-1.06l1.809-1.81a.75.75 0 0 1 1.06 0m-5.525 5.525a.75.75 0 0 1 0 1.06L9.12 18.242a.75.75 0 0 1-1.06-1.06l1.797-1.797a.75.75 0 0 1 1.06 0M8.06 9.86a.75.75 0 0 0 0 1.06l1.81 1.81a.75.75 0 0 0 1.06-1.06L9.12 9.86a.75.75 0 0 0-1.06 0m5.524 5.525a.75.75 0 0 0 0 1.06l1.797 1.797a.75.75 0 0 0 1.06-1.06l-1.796-1.797a.75.75 0 0 0-1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.358 12.909c0-.967.784-1.75 1.75-1.75h2.285c.966 0 1.75.783 1.75 1.75v2.284a1.75 1.75 0 0 1-1.75 1.75h-2.285a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v2.284c0 .139.112.25.25.25h2.285a.25.25 0 0 0 .25-.25V12.91a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOilCanisterOutline;
