import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeGlobeBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M20.34 11.197c0 2.604-1.217 4.987-3.228 6.55a.5.5 0 0 1-.298.1H7.177a.5.5 0 0 1-.3-.101c-2-1.563-3.217-3.946-3.217-6.549 0-4.59 3.74-8.33 8.34-8.33s8.34 3.74 8.34 8.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.801 19.079a.5.5 0 0 0-.42-.23H7.623a.5.5 0 0 0-.42.23l-.044.068c-.562.88-.845 1.32-.815 1.808.027.447.25.854.612 1.12.395.288.919.288 1.964.288h6.164c1.044 0 1.568 0 1.964-.289a1.5 1.5 0 0 0 .612-1.118c.03-.489-.253-.93-.816-1.81zM15.96 14.547c-.08.18-.26.3-.46.3h-2.25a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5H8.5c-.2 0-.38-.12-.46-.3-.08-.19-.05-.4.09-.54a11.4 11.4 0 0 0 1.162-1.519.294.294 0 0 0-.252-.451c-.2 0-.38-.11-.46-.29a.53.53 0 0 1 .07-.54c1.03-1.2 1.98-2.68 2.9-4.52.09-.16.26-.27.45-.27s.36.11.45.27c.92 1.84 1.87 3.32 2.89 4.52.13.15.16.36.08.54s-.26.29-.46.29a.295.295 0 0 0-.255.453c.354.552.747 1.06 1.165 1.517.13.14.17.35.09.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeGlobeBulk;
