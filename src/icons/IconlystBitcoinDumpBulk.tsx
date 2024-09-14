import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinDumpBulk = ({
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
      d="M13.304 2.41a8.365 8.365 0 0 0-8.365 8.365q.002.232.018.46a.32.32 0 0 0 .19.264c.422.197.796.51 1.06.935L7.33 14.25a.3.3 0 0 0 .342.129l2.872-.863a2.5 2.5 0 0 1 2.89 1.155l.793 1.387a.32.32 0 0 0 .305.155c.28-.02.566.003.85.085a2.48 2.48 0 0 1 1.641 1.53c.07.186.285.29.457.19a8.35 8.35 0 0 0 4.19-7.242 8.365 8.365 0 0 0-8.366-8.365"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.928 12.27c.513-.053.995-.28 1.345-.666a2.12 2.12 0 0 0 .54-1.623 2.05 2.05 0 0 0-.496-1.147c.365-.43.55-.994.495-1.564-.093-.976-.899-1.75-1.884-1.873v-.075a.75.75 0 0 0-1.5 0v.05h-.66a.75.75 0 0 0-.75.75v5.42a.75.75 0 0 0 .75.75h.66v.05a.75.75 0 0 0 1.5 0zm-.268-5.398h-1.142v1.21h1.2c.172 0 .33-.07.447-.197a.6.6 0 0 0 .154-.472c-.028-.298-.324-.541-.66-.541m-1.142 2.71h1.142c.34 0 .63.238.659.54a.6.6 0 0 1-.154.473.6.6 0 0 1-.446.197h-1.201zM14.9 17.98a.75.75 0 0 0-.929.514l-.123.43-1.933-3.385a.75.75 0 0 0-.868-.347L6.67 16.507l-1.95-3.151a.75.75 0 0 0-1.275.789l2.252 3.64a.75.75 0 0 0 .853.324l4.36-1.309 1.6 2.805-.36-.104a.75.75 0 1 0-.418 1.44l2.137.62q.102.03.21.03v-.001l.002.001c.03 0 .06-.02.09-.024.092-.012.186-.024.27-.069l.003-.004.008-.002c.056-.032.096-.08.14-.123.024-.023.054-.039.074-.065a.8.8 0 0 0 .131-.253l.001-.003.006-.019.61-2.121a.75.75 0 0 0-.514-.928"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinDumpBulk;
