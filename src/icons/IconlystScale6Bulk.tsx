import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale6Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.161 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.136 17.774H7.867a.75.75 0 0 1 0-1.5h8.27a.75.75 0 0 1 0 1.5M17.746 8.99l-2.122 3.406a.752.752 0 0 1-1.136.164 3.7 3.7 0 0 0-1.236-.725l.951-2.213a.75.75 0 0 0-.393-.986.75.75 0 0 0-.985.393l-1.122 2.612c-.788.063-1.56.36-2.19.92a.746.746 0 0 1-1.135-.164L6.258 8.99a.75.75 0 0 1 .138-.957 8.44 8.44 0 0 1 11.212 0 .75.75 0 0 1 .139.957"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale6Bulk;
