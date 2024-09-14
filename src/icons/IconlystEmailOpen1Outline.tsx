import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen1Outline = ({
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
      d="M7.809 21.51A5.38 5.38 0 0 1 3.9 20.055a5.06 5.06 0 0 1-1.4-3.686v-5.845A3.81 3.81 0 0 1 4.133 7.39l6.158-4.292a3.435 3.435 0 0 1 3.915 0l6.16 4.293a3.81 3.81 0 0 1 1.633 3.128v5.845a5.06 5.06 0 0 1-1.4 3.686 5.39 5.39 0 0 1-3.91 1.455h-8.88zm.02-1.5h8.856a3.93 3.93 0 0 0 2.853-1.02 3.6 3.6 0 0 0 .96-2.624v-5.845a2.31 2.31 0 0 0-.99-1.9l-6.16-4.293a1.94 1.94 0 0 0-2.2 0l-6.16 4.293a2.31 2.31 0 0 0-.99 1.9v5.845a3.6 3.6 0 0 0 .962 2.624 4.12 4.12 0 0 0 2.869 1.02"
    />
    <Path
      fill={props.color}
      d="M12.265 15.761a2.8 2.8 0 0 1-1.751-.613L6.477 11.89a.75.75 0 1 1 .94-1.168l4.034 3.252a1.31 1.31 0 0 0 1.636 0l3.993-3.246a.75.75 0 0 1 .946 1.164l-4 3.252c-.5.4-1.121.617-1.761.617"
    />
  </Svg>
);
export default IconlystEmailOpen1Outline;
