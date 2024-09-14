import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasSockBold = ({
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
      d="M19.66 5.193c0-1.269-1.034-2.025-2.187-2.137-.165-.016-.3.12-.3.285v1.914a.75.75 0 0 1-1.5 0V3.341a.3.3 0 0 0-.3-.3h-.975a.3.3 0 0 0-.3.3v1.914a.75.75 0 0 1-1.5 0V3.341a.3.3 0 0 0-.3-.3h-.975a.3.3 0 0 0-.3.3v1.914a.75.75 0 0 1-1.5 0V3.341a.28.28 0 0 0-.3-.285c-1.153.111-2.19.867-2.19 2.137l.002 1.356c0 1.248 1.01 2.154 2.405 2.154h7.817c1.393 0 2.405-.906 2.405-2.154zM18.092 9.834c.205-.052.42.093.42.305v5.18c0 1.18-.6 2.27-1.6 2.9l-4.95 3.11-.17.11q-.615.39-1.29.57c-.42.12-.86.18-1.3.18-1.3 0-2.59-.53-3.54-1.52a4.88 4.88 0 0 1-1.26-4.12c.04-.21.08-.43.15-.63.15-.5.37-.96.67-1.38a4.8 4.8 0 0 1 1.69-1.5l1.65-.88v-1.953c0-.2.19-.342.387-.31q.239.041.492.042h7.81q.445-.002.84-.104"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m14.999 14.403-.446-.257.446-.258a.75.75 0 1 0-.75-1.298l-.445.256v-.514a.75.75 0 0 0-1.5 0v.515l-.447-.257a.75.75 0 1 0-.75 1.298l.446.258-.446.257a.75.75 0 0 0 .75 1.299l.447-.258v.515a.75.75 0 0 0 1.5 0v-.514l.445.257a.75.75 0 0 0 1.024-.275.75.75 0 0 0-.274-1.024M11.961 21.328l-.17.11q-.615.39-1.29.57v-.03c-.08-3.16-3.03-5.43-5.95-6.06.15-.5.37-.96.67-1.38 3.11.78 6.32 3.16 6.74 6.79"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasSockBold;
