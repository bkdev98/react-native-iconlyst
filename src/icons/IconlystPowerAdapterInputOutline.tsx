import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterInputOutline = ({
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
      d="M17.26 15.184a.53.53 0 0 0-.532.532v.96h3.137v-.96a.53.53 0 0 0-.533-.532zm-2.032.532c0-1.123.91-2.032 2.033-2.032h2.071c1.123 0 2.033.91 2.033 2.032v1.71a.75.75 0 0 1-.75.75h-4.636a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.625 16.676a.75.75 0 0 1 .75.75v1.337h1.793v-1.337a.75.75 0 0 1 1.5 0v2.087a.75.75 0 0 1-.75.75h-3.293a.75.75 0 0 1-.75-.75v-2.087a.75.75 0 0 1 .75-.75M7.658 7.857a5.607 5.607 0 0 1 5.607-5.607h.06a5.607 5.607 0 0 1 5.607 5.607v6.552a.75.75 0 0 1-1.5 0V7.857a4.107 4.107 0 0 0-4.107-4.107h-.06a4.107 4.107 0 0 0-4.107 4.107.75.75 0 1 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.38 8.615c-.964 0-1.745.782-1.745 1.747v8.14c0 .966.781 1.747 1.745 1.747h4.03c.964 0 1.746-.782 1.746-1.746v-8.141c0-.965-.782-1.747-1.747-1.747zm-3.245 1.747A3.246 3.246 0 0 1 6.38 7.115h4.03a3.247 3.247 0 0 1 3.246 3.247v8.14a3.247 3.247 0 0 1-3.247 3.247H6.38a3.246 3.246 0 0 1-3.245-3.246z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.76 11.447a.75.75 0 0 1 .3 1.017l-.664 1.222h1.26a.75.75 0 0 1 .658 1.108l-1.267 2.329a.75.75 0 0 1-1.318-.717l.664-1.22H7.135a.75.75 0 0 1-.66-1.108l1.268-2.33a.75.75 0 0 1 1.017-.301"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerAdapterInputOutline;
