import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPDFBadgeOutline = ({
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
      d="M2.797 4.862c.86-.923 2.084-1.436 3.519-1.436h11.867c1.439 0 2.662.513 3.523 1.437C22.56 5.78 23 7.043 23 8.45v7.103c0 1.407-.44 2.67-1.295 3.587-.86.924-2.084 1.437-3.523 1.437H6.316c-1.438 0-2.662-.513-3.522-1.437-.854-.918-1.294-2.18-1.294-3.587V8.45c0-1.408.442-2.67 1.297-3.588m1.098 1.023C3.34 6.48 3 7.354 3 8.45v7.103c0 1.097.34 1.972.892 2.565.547.587 1.356.959 2.424.959h11.866c1.069 0 1.879-.372 2.426-.96.552-.593.892-1.467.892-2.564V8.45c0-1.097-.34-1.972-.892-2.565-.547-.587-1.357-.96-2.425-.96H6.316c-1.063 0-1.873.372-2.421.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.47 9.559a.75.75 0 0 1 .75-.75H6.7a2.387 2.387 0 0 1 0 4.772H5.97v.86a.75.75 0 1 1-1.5 0zm1.5 2.522H6.7a.887.887 0 1 0 0-1.772H5.97zM9.93 9.555a.75.75 0 0 1 .75-.75h1.223a3.194 3.194 0 0 1 2.26 5.458c-.599.6-1.413.936-2.26.936H10.68a.75.75 0 0 1-.75-.75zm1.5.75v3.394h.473c.45 0 .882-.179 1.2-.497v-.001a1.693 1.693 0 0 0 0-2.399 1.7 1.7 0 0 0-1.2-.497zM15.879 9.555a.75.75 0 0 1 .75-.75h2.65a.75.75 0 0 1 0 1.5h-1.9v1.354h1.493a.75.75 0 0 1 0 1.5H17.38v1.29a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPDFBadgeOutline;
