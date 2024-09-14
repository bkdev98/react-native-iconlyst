import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPyramidOutline = ({
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
      d="M14.058 3.248a2.173 2.173 0 0 0-3.616 0zm0 0 7.577 11.365a2.173 2.173 0 0 1-.836 3.149l-7.145 3.572a3.14 3.14 0 0 1-2.807 0l-7.145-3.572a2.173 2.173 0 0 1-.836-3.15l7.576-11.364m1.248.832L4.114 15.445a.673.673 0 0 0 .259.976l7.144 3.572a1.64 1.64 0 0 0 1.466 0l7.144-3.572a.673.673 0 0 0 .26-.976L12.81 4.08a.674.674 0 0 0-1.12 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.368a.75.75 0 0 1 .75.75V20.97a.75.75 0 0 1-1.5 0V3.12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPyramidOutline;
