import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSteemBold = ({
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
      d="m16.434 15.495-.3.682a.75.75 0 1 1-1.373-.604l.304-.69a2.45 2.45 0 0 0 0-2.024l-.787-1.58a2.9 2.9 0 0 1-.31-1.305c0-.46.105-.9.31-1.307l.426-.857a.749.749 0 1 1 1.343.668l-.427.86q-.151.3-.151.636 0 .337.15.632l.803 1.614a3.936 3.936 0 0 1 .012 3.275m-3.247.846-.37.86a.75.75 0 1 1-1.377-.594l.375-.87a3.27 3.27 0 0 0-.016-2.7l-1.011-2.04a3.48 3.48 0 0 1 .002-3.131l.54-1.076a.75.75 0 0 1 1.34.67l-.54 1.08a2 2 0 0 0-.213.894c0 .307.076.623.212.89l1.024 2.067a4.77 4.77 0 0 1 .034 3.95m-3.484-.85-.3.685a.75.75 0 0 1-1.373-.602l.302-.69c.142-.316.213-.663.21-1.012a2.5 2.5 0 0 0-.224-1.01l-.79-1.583a2.9 2.9 0 0 1-.31-1.305c0-.46.106-.9.31-1.307l.427-.857a.749.749 0 1 1 1.343.668l-.427.86q-.152.3-.152.636 0 .337.15.632l.803 1.614c.246.544.365 1.087.37 1.64a3.9 3.9 0 0 1-.34 1.632M12 2.506c-5.238 0-9.5 4.26-9.5 9.5 0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSteemBold;
