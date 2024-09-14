import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinStarBulk = ({
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
      d="M12 2.5c-4.425 0-8.026 3.6-8.026 8.026C3.974 16.162 10.566 21.5 12 21.5s8.026-5.338 8.026-10.974C20.026 6.1 16.425 2.5 12 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.787 11.26 1.011-.971c.198-.19.327-.444.362-.717a1.2 1.2 0 0 0-.239-.894 1.2 1.2 0 0 0-.793-.463l-1.41-.202-.63-1.258-.002-.004a1.219 1.219 0 0 0-2.177.004l-.63 1.257-1.41.203c-.27.038-.52.166-.707.36-.46.48-.447 1.247.033 1.714l1.015.973-.241 1.386c-.04.26.004.53.127.761.22.412.643.647 1.078.647.19 0 .383-.044.56-.14L12 13.262l1.258.653a1.221 1.221 0 0 0 1.769-1.279zm-2.789-3.33.444.886c.178.358.521.605.916.66l.975.14-.698.67a1.2 1.2 0 0 0-.353 1.08l.167.958-.886-.46a1.22 1.22 0 0 0-1.127 0l-.889.46.166-.957a1.2 1.2 0 0 0-.352-1.08l-.699-.67.97-.14c.396-.053.74-.3.921-.658z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinStarBulk;
