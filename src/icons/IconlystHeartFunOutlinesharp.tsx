import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartFunOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.19 15.01h.15c1.68 0 3.32-1.05 4.31-2.74l.38-.65-1.3-.75-.38.65c-.57.98-1.67 2.07-3.09 1.99-1.4.05-2.49-1.01-3.06-1.99l-.38-.65-1.3.75.38.65c.99 1.7 2.64 2.74 4.29 2.74"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.95 21.68.3.13.3-.13c4.71-2.09 9.73-6.19 9.7-11.44-.01-3.11-1.73-5.59-4.48-6.48-2.11-.68-4.04-.17-5.52 1.44-1.48-1.61-3.41-2.12-5.52-1.44-2.75.89-4.47 3.37-4.48 6.48-.02 5.26 5 9.36 9.7 11.44M7.19 5.19c.46-.15.89-.22 1.31-.22v-.01c1.22 0 2.27.63 3.13 1.87l.62.88.62-.88c1.16-1.66 2.66-2.22 4.44-1.64 2.52.82 3.44 3.15 3.44 5.06.02 4.42-4.5 8.07-8.5 9.92-4-1.85-8.52-5.5-8.5-9.92 0-1.91.91-4.25 3.44-5.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartFunOutlinesharp;
