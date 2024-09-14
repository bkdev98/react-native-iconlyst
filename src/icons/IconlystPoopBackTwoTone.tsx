import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopBackTwoTone = ({
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
      d="M15.285 10.3c.333-.527.56-1.125.632-1.751.222-1.985-1.232-3.3-2.794-4.058-.432-.21-.94-.473-1.412-.552.019.074.846 1.44-1.46 3.363-.313.37-1.11 1.161-1.076 2.079.016.434.154.868.393 1.222"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.174 12.917c-1.523.292-2.686 1.682-2.686 3.363 0 1.89 1.478 3.062 3.27 3.43 3.704.557 10.244.369 11.75 0 1.54-.387 2.98-1.54 2.98-3.43 0-1.691-1.161-3.08-2.693-3.364"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.21 9.043c-1.712.105-3.082 1.597-3.082 3.42 0 .133.018.256.036.389.14 1.057.77 1.668 1.305 2.074M15.821 9.053c1.685.133 3.01 1.607 3.01 3.41 0 .152-.019.303-.036.454-.242 1.26-1.083 1.84-1.282 1.99"
    />
  </Svg>
);
export default IconlystPoopBackTwoTone;
