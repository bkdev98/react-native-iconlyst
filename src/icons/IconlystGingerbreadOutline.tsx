import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGingerbreadOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.145 10.286a3.207 3.207 0 0 1 3.896-2.324l2.45.62a.75.75 0 0 1-.368 1.454l-2.45-.62a1.707 1.707 0 0 0-.837 3.31l1.646.417a1.743 1.743 0 0 1 1.002 2.686L6.496 18.68a1.707 1.707 0 1 0 2.8 1.954l1.41-2.023a1.742 1.742 0 0 1 2.86 0l1.409 2.023a1.707 1.707 0 1 0 2.801-1.954l-2.03-2.91c-.697-.999-.179-2.387 1.003-2.685l1.415-.358a1.707 1.707 0 1 0-.837-3.31l-.007.001-2.48.6a.75.75 0 1 1-.352-1.458l2.476-.599a3.207 3.207 0 0 1 1.568 6.22l-1.416.358a.243.243 0 0 0-.14.374l2.03 2.91a3.207 3.207 0 1 1-5.262 3.668l-1.41-2.022a.243.243 0 0 0-.397 0l-1.41 2.022a3.207 3.207 0 1 1-5.262-3.669l1.989-2.851a.243.243 0 0 0-.14-.374L5.47 14.18a3.207 3.207 0 0 1-2.324-3.895"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 3.865a2.891 2.891 0 1 1 0 5.782.75.75 0 0 0 0 1.5 4.391 4.391 0 1 0-4.392-4.391c0 1.154.42 2.248 1.184 3.05a.75.75 0 0 0 1.086-1.035c-.482-.505-.77-1.22-.77-2.015A2.89 2.89 0 0 1 12 3.865M11.966 12.411a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M11.966 14.986a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M18.986 17.93a.75.75 0 0 1-.637.849l-.95.135-.135.949a.75.75 0 0 1-.636.637l-.95.135-.135.95a.75.75 0 0 1-1.485-.212l.215-1.507a.75.75 0 0 1 .636-.637l.95-.135.135-.95a.75.75 0 0 1 .637-.636l1.506-.214a.75.75 0 0 1 .849.636M16.741 12.158a.75.75 0 0 0 .233.87l1.14.894a.75.75 0 1 0 .925-1.18l-.696-.547.33-.82a.75.75 0 0 0-.233-.87l-.57-.448a.75.75 0 1 0-.925 1.18l.126.1zM7.192 12.158a.75.75 0 0 1-.234.87l-1.14.894a.75.75 0 1 1-.925-1.18l.697-.547-.33-.82a.75.75 0 0 1 .233-.87l.57-.448a.75.75 0 1 1 .925 1.18l-.127.1zM5.286 17.93a.75.75 0 0 1 .848-.636l1.507.214a.75.75 0 0 1 .637.637l.135.95.949.134a.75.75 0 0 1 .637.637l.214 1.507a.75.75 0 0 1-1.485.211l-.135-.95-.95-.134a.75.75 0 0 1-.636-.637l-.135-.95-.95-.134a.75.75 0 0 1-.636-.849"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.99 7.4a.75.75 0 0 1 .075 1.058c-.11.127-.26.221-.364.278-.129.07-.298.142-.493.185-.406.088-.984.049-1.433-.454a.75.75 0 0 1 1.108-1.01l.006-.002a.3.3 0 0 0 .095-.036l.007-.004a.75.75 0 0 1 .998-.015M13.7 5.959a.75.75 0 0 1-.75.75h-.009a.75.75 0 0 1 0-1.5h.008a.75.75 0 0 1 .75.75M11.741 5.959a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1 0-1.5h.008a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGingerbreadOutline;