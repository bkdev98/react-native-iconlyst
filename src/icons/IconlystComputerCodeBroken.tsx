import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCodeBroken = ({
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
      d="M12.25 3.283H7.277a4.03 4.03 0 0 0-4.028 4.03v5.456a4.03 4.03 0 0 0 4.028 4.029h9.943a4.03 4.03 0 0 0 4.029-4.03V7.313a4.03 4.03 0 0 0-4.03-4.029h-.736M7.305 20.717h9.889M10.134 16.799l-.637 3.917M14.365 16.799l.637 3.917M12.912 12.611h3.047"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.54 7.707 2.188 2.188-2.188 2.189"
    />
  </Svg>
);
export default IconlystComputerCodeBroken;
