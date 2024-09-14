import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPDFBadgeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.933 4.176C20.44 4.176 22 5.946 22 8.45v7.103c0 2.504-1.56 4.274-4.068 4.274H6.066C3.56 19.827 2 18.057 2 15.553V8.45c0-2.504 1.568-4.274 4.066-4.274h8.136"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.97 12.831H6.45a1.637 1.637 0 1 0 0-3.272H4.97v4.883M13.383 13.732a2.443 2.443 0 0 0 0-3.46 2.44 2.44 0 0 0-1.73-.717H10.43v4.894M19.029 9.555h-2.651v4.894m2.243-2.04h-2.243"
    />
  </Svg>
);
export default IconlystPDFBadgeBroken;
