import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFilterBold = ({
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
      d="M13.974 9.118v.54c0 .2-.08.4-.26.56l-1.91 1.89c-.28.26-.43.61-.43.99v.67l-.44.18v-1.04c0-.35-.14-.68-.43-.99l-1.67-1.48a.78.78 0 0 1-.21-.52v-.8c0-.16.13-.29.29-.29h4.76c.17 0 .3.13.3.29"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.474 9.658c0 .62-.27 1.22-.73 1.65l-1.9 1.87.03.69c0 .56-.34 1.05-.86 1.26l-.73.29c-.16.07-.33.1-.5.1a1.35 1.35 0 0 1-1.35-1.35v-1.2l-1.63-1.44c-.45-.45-.68-1.03-.68-1.61v-.8c0-.99.8-1.79 1.79-1.79h4.76c1 0 1.8.8 1.8 1.79zm-4.34-7.16a8.42 8.42 0 1 0 .001 16.84 8.42 8.42 0 0 0 0-16.84M20.992 19.795l-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchFilterBold;
