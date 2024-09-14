import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallRemoveBold = ({
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
      d="M21.998 14.953c.005-.348.016-1.271-.871-2.17-1.366-1.381-4.27-2.082-8.63-2.082-4.356.005-7.258.708-8.623 2.09-.887.899-.876 1.823-.872 2.172L3 15.07c0 1.57.212 2.418.731 2.925.48.468 1.116.552 1.947.552q.326-.002.692-.012c.282-.007.588-.015.92-.015 1.582-.005 1.996-.955 2.328-1.718.394-.903.733-1.682 2.88-1.682s2.488.778 2.883 1.68c.333.76.748 1.71 2.331 1.71q.502.002.93.015c1.179.029 2.024.05 2.627-.536.519-.506.731-1.355.731-2.93 0-.017 0-.088-.002-.107M9.283 6.951h6.433a.75.75 0 0 0 0-1.5H9.283a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallRemoveBold;
