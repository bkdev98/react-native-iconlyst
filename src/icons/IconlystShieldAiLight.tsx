import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldAiLight = ({
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
      d="M12 21s7.324-2.217 7.324-8.33c0-6.114.266-6.588-.322-7.18C18.412 4.896 12.96 3 12 3S5.587 4.901 4.998 5.49c-.588.588-.321 1.065-.321 7.18C4.677 18.783 12 21 12 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.499 12.245-.089-.24a3.3 3.3 0 0 0-1.947-1.949l-.24-.089.24-.088a3.3 3.3 0 0 0 1.947-1.95l.088-.24.09.24a3.3 3.3 0 0 0 1.946 1.95l.24.088-.24.089a3.3 3.3 0 0 0-1.947 1.95zM14.745 14.31a1.55 1.55 0 0 0-1.031-1.032 1.55 1.55 0 0 0 1.031-1.033c.15.495.537.883 1.031 1.033a1.55 1.55 0 0 0-1.031 1.033"
    />
  </Svg>
);
export default IconlystShieldAiLight;
