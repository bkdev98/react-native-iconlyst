import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartReturnBulk = ({
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
      d="M21.342 7.07a2.04 2.04 0 0 0-1.354-.806c-.071-.01-.114-.016-13.99-.02l-.226-2.708a.75.75 0 0 0-.62-.676l-2.024-.35a.74.74 0 0 0-.866.61.75.75 0 0 0 .61.867l1.454.252.888 10.584a2.513 2.513 0 0 0 2.49 2.296H18.33c1.236 0 2.3-.922 2.476-2.147l.922-6.379a2.04 2.04 0 0 0-.386-1.524"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.235 19.041a1.232 1.232 0 1 0 .003 2.464 1.232 1.232 0 0 0-.003-2.464M18.26 19.041c-.68 0-1.233.552-1.233 1.231a1.232 1.232 0 1 0 1.232-1.231"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.476 14.722a.75.75 0 0 0 .75-.75v-1.197a3.01 3.01 0 0 0-3.008-3.008h-1.55l.463-.463a.75.75 0 1 0-1.06-1.06L9.326 9.986a.75.75 0 0 0 0 1.06l1.743 1.744a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06l-.464-.464h1.551c.831 0 1.508.677 1.508 1.508v1.197c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystShoppingCartReturnBulk;
