import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageEditTwoTone = ({
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
      d="m3.506 15.572 3.949-2.866a3.86 3.86 0 0 1 4.816.224l7.693 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.499 15.474c-.839-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.499 10.953v5.023c0 2.944-1.843 5.021-4.787 5.021H8.278c-2.945 0-4.778-2.077-4.778-5.021V8.029c0-2.945 1.843-5.021 4.778-5.021h5.509"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.964 3.427a1.1 1.1 0 0 1 1.554-.058l.687.637a1.1 1.1 0 0 1 .058 1.555l-3.439 3.706a2 2 0 0 1-1.26.63l-.71.073a.8.8 0 0 1-.882-.818l.02-.714a2 2 0 0 1 .533-1.304z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystImageEditTwoTone;
