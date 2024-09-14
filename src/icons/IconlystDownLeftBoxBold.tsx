import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownLeftBoxBold = ({
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
      d="M17.566 13.992H13.26a2.98 2.98 0 0 1-2.121-.879 2.98 2.98 0 0 1-.879-2.121V6.687c0-1.115.613-2.08 1.518-2.593.1-.057.06-.27-.056-.27H8.286c-2.995 0-5.007 1.924-5.007 4.79v7.563c0 2.864 2.012 4.79 5.007 4.79h7.128c2.995 0 5.006-1.926 5.006-4.79v-3.64c0-.116-.208-.156-.265-.057a2.98 2.98 0 0 1-2.59 1.512"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.566 11.742H13.26a.744.744 0 0 1-.692-.462.8.8 0 0 1-.058-.288V6.687a.75.75 0 0 1 1.5 0v2.494l5.43-5.43a.75.75 0 0 1 1.062 1.06l-5.431 5.431h2.495a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownLeftBoxBold;
