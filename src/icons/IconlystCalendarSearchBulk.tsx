import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarSearchBulk = ({
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
      d="M7.842 10.426c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h8.49c.42 0 .75.33.75.75 0 .41-.33.75-.75.75zM17.573 20.068a2.09 2.09 0 0 1-2.09-2.09c0-1.153.937-2.091 2.09-2.091s2.09.938 2.09 2.09c0 1.154-.938 2.09-2.09 2.09m3.893.886-.942-.94a3.56 3.56 0 0 0 .64-2.036 3.595 3.595 0 0 0-3.59-3.591 3.595 3.595 0 0 0-3.592 3.59c0 1.98 1.611 3.59 3.591 3.59.68 0 1.31-.2 1.852-.53l.981.979a.747.747 0 0 0 1.061-.001.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M20.37 13.185a5.5 5.5 0 0 0-2.608-.65c-3.08 0-5.58 2.5-5.58 5.57 0 .934.232 1.82.65 2.599.074.138-.024.312-.18.312h-4.37c-3 0-4.8-1.77-4.8-4.75v-8.15c0-2.283 1.113-3.83 3.022-4.412a.193.193 0 0 1 .248.188v1.464q0 .06.009.116v.49a.75.75 0 1 0 1.5 0v-3.43a.75.75 0 0 0-.29-.593.75.75 0 0 1 .48-.173c.41 0 .75.34.75.75v.92h4.62c.111 0 .2.09.2.2 0 .775.027 2.326.027 2.326a.75.75 0 0 0 1.5 0v-3.43a.75.75 0 0 0-.296-.598.74.74 0 0 1 .47-.168c.41 0 .75.34.75.75v.97c1.23.1 2.26.51 2.98 1.23.81.82 1.24 1.99 1.23 3.4v4.89c0 .156-.173.253-.312.18"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.208 2.492a.75.75 0 1 0-1.5 0v3.43a.75.75 0 1 0 1.5 0zM16.496 2.492a.75.75 0 1 0-1.5 0v3.43a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystCalendarSearchBulk;
