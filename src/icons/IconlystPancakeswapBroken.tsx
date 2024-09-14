import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPancakeswapBroken = ({
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
      d="M15.815 20.556c3.057-.859 5.202-3.082 5.202-5.424 0-2.78-1.473-4.18-3.097-5.21 0 0 .788-3.09.951-4.439l.001-.005a2.26 2.26 0 1 0-4.5-.436l-.393 4.064c-.482-.3-2.476-.3-2.958 0l-.394-4.064a2.26 2.26 0 0 0-4.5.436v.005c-.019.423.951 4.439.951 4.439-1.622 1.03-3.095 2.43-3.095 5.21 0 2.342 2.145 4.565 5.202 5.424q1.152.309 2.306.403M15.563 14.871v-.73m-6.126.73v-.73"
    />
  </Svg>
);
export default IconlystPancakeswapBroken;
