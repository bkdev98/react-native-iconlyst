import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVIPTicketBold = ({
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
      d="M16.772 10.57h-.782v1.147h.782a.574.574 0 0 0 0-1.147"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.772 13.218h-.782v.87a.75.75 0 0 1-1.5 0V9.82a.75.75 0 0 1 .75-.75h1.532c1.144 0 2.074.93 2.074 2.073 0 1.144-.93 2.074-2.074 2.074m-3.352.963a.75.75 0 0 1-1.5 0v-4.36a.75.75 0 1 1 1.5 0zm-2.323-4.103L9.505 14.44a.75.75 0 0 1-1.409 0l-1.592-4.36a.75.75 0 0 1 1.409-.516l.887 2.431.888-2.43a.75.75 0 0 1 1.409.515m10.399 2.664a488 488 0 0 1 0-3.63c.001-1.128.001-1.694-.146-2.206a3.72 3.72 0 0 0-2.553-2.555c-.51-.148-1.076-.148-2.205-.148H13.42v2.772a.75.75 0 0 1-1.5 0V4.203H7.405c-1.13 0-1.697 0-2.209.15A3.73 3.73 0 0 0 2.647 6.9C2.5 7.411 2.5 7.98 2.5 9.111c0 .273 0 .398.023.514.071.358.147.484.431.713.088.071.211.136.755.422.471.247.751.71.751 1.238 0 .531-.281.995-.751 1.243-.543.285-.667.353-.756.424-.283.23-.359.356-.431.716-.016.085-.021.226-.021.51-.001 1.13-.002 1.697.147 2.21a3.72 3.72 0 0 0 2.549 2.55c.512.147 1.078.147 2.208.147h4.515v-2.77a.75.75 0 0 1 1.5 0v2.77h3.179c1.126 0 1.691 0 2.198-.147a3.72 3.72 0 0 0 2.556-2.555c.147-.509.147-1.073.147-2.198z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.772 10.57h-.782v1.147h.782a.574.574 0 0 0 0-1.147"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.772 13.218h-.782v.87a.75.75 0 0 1-1.5 0V9.82a.75.75 0 0 1 .75-.75h1.532c1.144 0 2.074.93 2.074 2.073 0 1.144-.93 2.074-2.074 2.074m-3.352.963a.75.75 0 0 1-1.5 0v-4.36a.75.75 0 1 1 1.5 0zm-2.323-4.103L9.505 14.44a.75.75 0 0 1-1.409 0l-1.592-4.36a.75.75 0 0 1 1.409-.516l.887 2.431.888-2.43a.75.75 0 0 1 1.409.515m10.399 2.664a488 488 0 0 1 0-3.63c.001-1.128.001-1.694-.146-2.206a3.72 3.72 0 0 0-2.553-2.555c-.51-.148-1.076-.148-2.205-.148H13.42v2.772a.75.75 0 0 1-1.5 0V4.203H7.405c-1.13 0-1.697 0-2.209.15A3.73 3.73 0 0 0 2.647 6.9C2.5 7.411 2.5 7.98 2.5 9.111c0 .273 0 .398.023.514.071.358.147.484.431.713.088.071.211.136.755.422.471.247.751.71.751 1.238 0 .531-.281.995-.751 1.243-.543.285-.667.353-.756.424-.283.23-.359.356-.431.716-.016.085-.021.226-.021.51-.001 1.13-.002 1.697.147 2.21a3.72 3.72 0 0 0 2.549 2.55c.512.147 1.078.147 2.208.147h4.515v-2.77a.75.75 0 0 1 1.5 0v2.77h3.179c1.126 0 1.691 0 2.198-.147a3.72 3.72 0 0 0 2.556-2.555c.147-.509.147-1.073.147-2.198z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVIPTicketBold;