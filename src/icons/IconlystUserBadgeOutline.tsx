import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBadgeOutline = ({
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
      d="M12.397 2.25a.75.75 0 0 1 .53.22l1.848 1.848h1.747c1.49 0 2.755.53 3.645 1.483.884.948 1.34 2.254 1.34 3.713v7.038c0 1.46-.456 2.766-1.34 3.714-.89.954-2.155 1.484-3.645 1.484H8.28c-1.493 0-2.76-.53-3.648-1.484-.883-.949-1.337-2.255-1.337-3.713V9.513c0-1.46.456-2.765 1.34-3.713.89-.954 2.156-1.483 3.645-1.483h1.739l1.848-1.848a.75.75 0 0 1 .53-.22m0 1.81L10.86 5.599a.75.75 0 0 1-.53.22H8.28c-1.12 0-1.972.389-2.547 1.006-.582.623-.938 1.54-.938 2.69v7.038c0 1.151.355 2.069.935 2.692.574.616 1.425 1.006 2.55 1.006h8.242c1.12 0 1.972-.39 2.548-1.007.581-.623.938-1.54.938-2.69V9.513c0-1.15-.357-2.067-.938-2.69-.576-.617-1.428-1.006-2.548-1.006h-2.057a.75.75 0 0 1-.53-.22z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.293 18.4a2.31 2.31 0 0 0-.783 1.713v.814a.75.75 0 0 1-1.5 0v-.814c0-.952.377-2.01 1.275-2.824.9-.816 2.255-1.328 4.111-1.328 1.858 0 3.215.506 4.116 1.317s1.279 1.865 1.279 2.818v.83a.75.75 0 0 1-1.5 0v-.83c0-.56-.221-1.198-.782-1.703-.56-.503-1.525-.932-3.113-.932-1.582 0-2.544.432-3.103.939M12.397 9.371a2.213 2.213 0 1 0 0 4.426 2.213 2.213 0 0 0 0-4.426m-3.713 2.213a3.713 3.713 0 1 1 7.426 0 3.713 3.713 0 0 1-7.426 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserBadgeOutline;
