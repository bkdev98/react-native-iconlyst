import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentStarOutline = ({
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
      d="M10.357 17.37a1.028 1.028 0 0 1-1.012-1.193l.275-1.562-1.144-1.1a1.026 1.026 0 0 1-.01-1.465 1.1 1.1 0 0 1 .55-.283l1.608-.233.7-1.417a1.01 1.01 0 0 1 1.002-.567 1.04 1.04 0 0 1 .842.563l.706 1.418 1.576.227a1.023 1.023 0 0 1 .562 1.76l-1.13 1.093.271 1.553a1.033 1.033 0 0 1-1.488 1.084l-1.415-.735-1.417.74a1.04 1.04 0 0 1-.476.117m1.68-.97.02.01zm.452-.008-.022.01zm-2.274-3.282.625.6a1.05 1.05 0 0 1 .3.911l-.152.862.79-.413a1 1 0 0 1 .972.01l.763.4-.15-.85a1.01 1.01 0 0 1 .3-.918l.622-.6-.866-.124a1.02 1.02 0 0 1-.78-.573l-.388-.78-.393.79a1.04 1.04 0 0 1-.766.56zm4.623 1.245v.018zm.143-1.918-.009.008zm-1-.694.007.012zm-1.3-.97-.01.018z"
    />
    <Path
      fill={props.color}
      d="M16.25 21.75H8.294a4.51 4.51 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.368 2.25h5.668a2.81 2.81 0 0 1 2.02.861l3.79 3.949c.502.52.782 1.216.78 1.939v8.164a4.544 4.544 0 0 1-4.376 4.587m-7.88-18a3.01 3.01 0 0 0-3 2.925v10.488a3 3 0 0 0 2.938 3.086h7.909a3.044 3.044 0 0 0 2.906-3.082V9c0-.336-.13-.658-.362-.9L14.97 4.15a1.3 1.3 0 0 0-.937-.4H8.368z"
    />
    <Path
      fill={props.color}
      d="M19.812 9.267h-2.739a3.314 3.314 0 0 1-3.3-3.311V3.062a.75.75 0 0 1 1.5 0v2.894a1.81 1.81 0 0 0 1.805 1.81h2.737a.75.75 0 0 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDocumentStarOutline;
