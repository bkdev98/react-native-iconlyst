import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOpenMouthBold = ({
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
      d="M14.991 14.006c-.563 0-1.022.458-1.022 1.022a1.022 1.022 0 1 0 1.022-1.022"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.991 17.549a2.524 2.524 0 0 1-2.522-2.521 2.524 2.524 0 0 1 2.522-2.522 2.524 2.524 0 0 1 2.521 2.522c0 1.39-1.13 2.521-2.521 2.521m-6.267-7.548a.975.975 0 1 1 .003-1.95.975.975 0 0 1-.003 1.95m5.808-1.662a.977.977 0 0 1 1.668.687.975.975 0 1 1-1.668-.687M16.217 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOpenMouthBold;
