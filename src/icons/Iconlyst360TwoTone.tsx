import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst360TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.84 4.957H7.16c-2.25 0-3.66 1.593-3.66 3.846v6.393c0 2.254 1.404 3.847 3.66 3.847H17.84c2.257 0 3.661-1.593 3.661-3.847V8.803c0-2.253-1.404-3.846-3.66-3.846"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.476 14.358a1.543 1.543 0 1 0 1.092-2.633L9.115 9.81H6.423M11.255 12.364l2.034-2.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.011 13.217a1.51 1.51 0 1 0-3.02 0 1.51 1.51 0 0 0 3.02 0M17.231 14.732a1.347 1.347 0 0 1-1.346-1.347v-2.23c0-.744.603-1.346 1.346-1.346v0c.744 0 1.347.602 1.347 1.345v2.231c0 .744-.603 1.347-1.347 1.347"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.788 7.955v.04"
    />
  </Svg>
);
export default Iconlyst360TwoTone;
