import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPancakeswapLight = ({
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
      d="M20.517 15.132c0 2.342-2.144 4.565-5.201 5.424q-3.315.888-6.63 0c-3.057-.859-5.202-3.082-5.202-5.424 0-2.78 1.473-4.18 3.095-5.21 0 0-.97-4.016-.95-4.439l-.001-.005a2.26 2.26 0 0 1 4.5-.436l.394 4.064c.482-.3 2.476-.3 2.958 0l.394-4.064a2.26 2.26 0 1 1 4.499.436l-.001.005c-.163 1.35-.95 4.439-.95 4.439 1.623 1.03 3.095 2.43 3.095 5.21M15.063 14.871v-.73m-6.126.73v-.73"
    />
  </Svg>
);
export default IconlystPancakeswapLight;
