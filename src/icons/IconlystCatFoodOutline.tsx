import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatFoodOutline = ({
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
      d="M7.02 9.804c.13.1.28.14.43.14l.01.01c.23 0 .46-.11.61-.32.32-.46.76-1 1.27-1.54 1.2 1.02 2.69 1.9 4.25 1.84 1.44-.06 2.66-.89 3.62-2.49.14-.24.14-.53 0-.77-.95-1.6-2.17-2.43-3.62-2.49-1.56-.06-3.06.82-4.25 1.84-.51-.54-.95-1.09-1.27-1.54a.753.753 0 1 0-1.23.87c.2.28.7.95 1.41 1.7-.71.75-1.21 1.42-1.41 1.7-.24.34-.16.81.18 1.05m6.49-1.37c-1.02.04-2.11-.57-3.08-1.38.97-.81 2.06-1.44 3.08-1.38.81.04 1.51.49 2.14 1.38-.62.9-1.33 1.35-2.14 1.38M4.04 20.435a1 1 0 0 1-.08 0H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.369l.64-3.66c.19-1.32 1.36-2.34 2.72-2.34h10.53c1.36 0 2.53 1.01 2.72 2.36l.642 3.64H21c.41 0 .75.34.75.75s-.34.75-.75.75zm14.47-4.9.596 3.4H4.896l.604-3.43c.09-.61.62-1.07 1.24-1.07h10.53c.62 0 1.15.46 1.24 1.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCatFoodOutline;
