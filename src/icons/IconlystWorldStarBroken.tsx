import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldStarBroken = ({
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
      d="M11.556 21a9.013 9.013 0 0 1-8.278-8.99 9.01 9.01 0 0 1 4.46-7.778M12.288 3c4.603 0 8.39 3.45 8.934 7.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.626 11.09a21 21 0 0 0-.197-2.212C14.96 5.446 13.732 3 12.29 3c-1.434 0-2.672 2.446-3.141 5.878a22 22 0 0 0-.216 3.13c0 1.107.075 2.167.216 3.142.328 2.38 1.34 4.678 2.409 5.85M5.928 12.019h5.952"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.828 13.538.895 1.8c.045.09.132.154.232.169l2.002.289a.3.3 0 0 1 .204.118.3.3 0 0 1-.032.4l-1.452 1.402a.3.3 0 0 0-.088.27l.348 1.982a.303.303 0 0 1-.251.344.34.34 0 0 1-.2-.031l-1.783-.935a.3.3 0 0 0-.287 0l-1.797.94a.313.313 0 0 1-.416-.128.3.3 0 0 1-.03-.192l.347-1.981a.3.3 0 0 0-.088-.27l-1.46-1.404a.305.305 0 0 1 0-.429.35.35 0 0 1 .176-.085l2.003-.291a.32.32 0 0 0 .232-.17l.893-1.798a.3.3 0 0 1 .177-.154.313.313 0 0 1 .375.155"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldStarBroken;
