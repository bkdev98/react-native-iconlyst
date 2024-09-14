import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinHideBold = ({
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
      d="M14.508 11.215H9.49a.75.75 0 0 1 0-1.5h5.018a.75.75 0 0 1 0 1.5M12 2.5c-4.425 0-8.026 3.601-8.026 8.027C3.974 16.163 10.566 21.5 12 21.5s8.026-5.337 8.026-10.973C20.026 6.101 16.425 2.5 12 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinHideBold;
