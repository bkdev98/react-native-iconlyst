import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEraserTwoTone = ({
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
      d="M16.448 20.547h4.182m-8.908-.116 9.042-9.043a2.514 2.514 0 0 0 0-3.554l-3.645-3.645a2.513 2.513 0 0 0-3.553 0l-9.272 9.272a2.71 2.71 0 0 0 0 3.834l2.44 2.462a2.6 2.6 0 0 0 1.836.765l12.922.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.86 8.895 7.198 7.199"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEraserTwoTone;
