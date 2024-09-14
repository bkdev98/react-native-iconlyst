import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinDumpBold = ({
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
      d="M14.16 6.873h-1.142v1.21h1.2c.172 0 .33-.07.447-.197a.6.6 0 0 0 .154-.472c-.028-.298-.324-.541-.66-.541M14.16 9.583h-1.142v1.21h1.2c.172 0 .33-.07.447-.197a.6.6 0 0 0 .154-.472c-.028-.303-.318-.541-.66-.541"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.773 11.605c-.35.385-.832.613-1.345.665v.073a.75.75 0 0 1-1.5 0v-.05h-.66a.75.75 0 0 1-.75-.75v-5.42a.75.75 0 0 1 .75-.75h.66v-.05a.75.75 0 0 1 1.5 0v.075c.985.122 1.791.897 1.884 1.873.054.57-.13 1.133-.495 1.564.271.315.454.707.496 1.147a2.12 2.12 0 0 1-.54 1.623M12.804 2.41a8.365 8.365 0 0 0-8.365 8.365q.002.232.018.46a.32.32 0 0 0 .19.264c.422.197.796.51 1.06.935L6.83 14.25a.3.3 0 0 0 .341.129l2.873-.863a2.5 2.5 0 0 1 2.89 1.155l.792 1.387a.32.32 0 0 0 .306.155c.28-.02.566.003.85.085a2.48 2.48 0 0 1 1.641 1.53c.07.186.285.29.457.19a8.35 8.35 0 0 0 4.19-7.242 8.365 8.365 0 0 0-8.366-8.365"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.4 17.98a.75.75 0 0 0-.929.513l-.123.43-1.933-3.385a.75.75 0 0 0-.868-.347L6.17 16.506l-1.95-3.15a.75.75 0 0 0-1.275.789l2.252 3.64a.75.75 0 0 0 .853.323l4.36-1.309 1.6 2.805-.36-.104a.75.75 0 1 0-.418 1.44l2.137.62q.102.03.21.03h.002c.03 0 .06-.02.09-.024.092-.012.186-.024.27-.069l.003-.004q.003 0 .008-.002c.056-.032.096-.08.14-.123.024-.023.054-.039.074-.065a.8.8 0 0 0 .131-.253l.001-.003.006-.019.61-2.12a.75.75 0 0 0-.514-.929"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinDumpBold;
