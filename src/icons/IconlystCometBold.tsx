import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCometBold = ({
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
      d="M3.919 15.433c-.021-1.914.916-4.069 2.5-5.575 1.089-1.033 3.385-2.585 6.732-1.735l-.416.833a.62.62 0 0 1-.465.327l-2.862.42a1.096 1.096 0 0 0-.626 1.878l2.08 2.001c.143.133.208.33.175.525l-.035.2c-2.196-1.114-4.957-.232-7.083 1.126m17.325-3.85a1.096 1.096 0 0 0-.615-1.88l-2.871-.42a.62.62 0 0 1-.463-.325l-1.284-2.57-.001-.002a1.08 1.08 0 0 0-.48-.478 1.116 1.116 0 0 0-1.511.48l-.183.367c-3.085-.889-6.158-.16-8.45 2.015-2.322 2.207-3.441 5.494-2.782 8.18a.75.75 0 0 0 1.194.408c1.563-1.236 4.767-2.947 6.862-1.519.022.015.047.017.07.03l-.185 1.058a1.114 1.114 0 0 0 1.616 1.165l2.566-1.329a.62.62 0 0 1 .575 0l2.573 1.332c.17.083.348.125.522.125q.085 0 .168-.014a1.12 1.12 0 0 0 .919-1.279l-.49-2.82a.58.58 0 0 1 .175-.527z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCometBold;
