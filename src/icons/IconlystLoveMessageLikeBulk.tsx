import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoveMessageLikeBulk = ({
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
      d="M17.576 16.418a.75.75 0 1 1 .85-1.237l2.83 1.946c.16.11.38.042.438-.143a6.3 6.3 0 0 0 .283-1.894V8.91c0-.668-.102-1.3-.287-1.881a.286.286 0 0 0-.437-.143L19.34 8.201a.75.75 0 1 1-.85-1.236l2.066-1.42a.287.287 0 0 0 .062-.423C19.706 4.058 18.405 3.4 16.895 3.4H8.058c-1.507 0-2.807.657-3.719 1.717a.287.287 0 0 0 .062.424L6.48 6.964a.751.751 0 0 1-.425 1.37.74.74 0 0 1-.422-.132l-1.93-1.321a.286.286 0 0 0-.437.142 6.2 6.2 0 0 0-.29 1.887v6.18c0 .665.098 1.303.284 1.896a.286.286 0 0 0 .438.143l2.835-1.948a.751.751 0 0 1 .85 1.237L4.397 18.47a.3.3 0 0 0-.07.43c.08.104.162.204.255.296.922.92 2.117 1.404 3.457 1.404h8.854c1.317-.018 2.554-.48 3.48-1.404q.138-.14.255-.297a.3.3 0 0 0-.07-.43z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.798 9.69a2.36 2.36 0 0 0-1.645-1.187 2.5 2.5 0 0 0-1.169.065c-.348.104-.643.358-.888.59-.285-.156-.642-.33-1.007-.345a2.5 2.5 0 0 0-1.148.225c-1.423.669-1.674 2.351-1.094 3.59.91 1.992 3.86 2.956 3.985 2.996a.2.2 0 0 0 .169-.02c.109-.07 2.687-1.714 3.105-3.896a3 3 0 0 0-.308-2.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoveMessageLikeBulk;
