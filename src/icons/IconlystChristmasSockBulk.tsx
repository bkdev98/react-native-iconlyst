import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasSockBulk = ({
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
      d="M19.66 5.194c0-1.27-1.034-2.026-2.187-2.138-.165-.016-.3.12-.3.285v1.914a.75.75 0 0 1-1.5 0V3.342a.3.3 0 0 0-.3-.3h-.976a.3.3 0 0 0-.3.3v1.913a.75.75 0 0 1-1.5 0V3.342a.3.3 0 0 0-.3-.3h-.975a.3.3 0 0 0-.3.3v1.913a.75.75 0 0 1-1.5 0V3.342c0-.166-.134-.302-.3-.286-1.153.112-2.189.867-2.189 2.138l.001 1.356c0 1.248 1.011 2.154 2.405 2.154h7.817c1.393 0 2.405-.907 2.405-2.155z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M18.092 9.834c.205-.052.419.094.419.305v5.18c0 1.18-.6 2.27-1.6 2.9l-4.95 3.11-.17.11q-.615.39-1.29.57c-.42.12-.86.18-1.3.18-1.3 0-2.59-.53-3.54-1.52a4.88 4.88 0 0 1-1.26-4.12c.04-.21.08-.43.15-.63.15-.5.37-.96.67-1.38a4.8 4.8 0 0 1 1.69-1.5l1.65-.88v-1.953c0-.2.19-.342.388-.31q.238.041.492.042h7.81q.445-.002.84-.104"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.998 14.403-.446-.258.446-.258a.75.75 0 1 0-.75-1.298l-.445.256v-.514a.75.75 0 0 0-1.5 0v.516l-.447-.258a.75.75 0 1 0-.75 1.298l.446.258-.446.258a.75.75 0 0 0 .75 1.298l.447-.258v.516a.75.75 0 0 0 1.5 0v-.514l.445.256a.75.75 0 0 0 1.024-.274.75.75 0 0 0-.274-1.024M11.96 21.328l-.17.11q-.615.39-1.29.57v-.03c-.08-3.16-3.03-5.43-5.95-6.06.15-.5.37-.96.67-1.38 3.11.78 6.32 3.16 6.74 6.79"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasSockBulk;
