import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopBackLight = ({
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
      d="M15.785 10.3c.333-.527.56-1.125.632-1.751.222-1.985-1.232-3.3-2.794-4.058-.432-.21-.94-.473-1.412-.552.019.074.846 1.44-1.46 3.363-.313.37-1.11 1.161-1.076 2.079.016.434.154.868.393 1.222"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.71 9.043c-1.712.105-3.082 1.597-3.082 3.42 0 .133.018.256.036.389 0 .018.01.046.01.065-1.523.293-2.686 1.682-2.686 3.363 0 1.89 1.478 3.062 3.27 3.431 3.704.557 10.244.368 11.75 0 1.54-.388 2.98-1.54 2.98-3.43 0-1.692-1.161-3.08-2.693-3.364.018-.15.036-.302.036-.453 0-1.804-1.324-3.278-3.01-3.41"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.975 14.923c-.473-.334-1.183-1.003-1.31-2.076M17.986 14.923c.473-.334 1.183-1.003 1.31-2.076"
    />
  </Svg>
);
export default IconlystPoopBackLight;
