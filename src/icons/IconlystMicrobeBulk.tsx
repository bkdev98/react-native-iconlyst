import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrobeBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m17.232 15.94.547-.841a.75.75 0 0 0-1.258-.818l-.547.84a.752.752 0 0 0 .629 1.16.75.75 0 0 0 .629-.341M12.437 18.302a2.76 2.76 0 0 0 1.65-1.318.75.75 0 0 0-1.311-.727 1.27 1.27 0 0 1-.757.605 1.25 1.25 0 0 1-.958-.108.751.751 0 0 0-.728 1.313 2.74 2.74 0 0 0 2.104.235M11.135 12.572a.75.75 0 1 0-1.064 1.056l.707.71a.747.747 0 0 0 1.06.005.75.75 0 0 0 .004-1.06zM9.018 10.16a.749.749 0 0 0 .713-.985 1.265 1.265 0 0 1 .8-1.593.75.75 0 0 0 .477-.947.747.747 0 0 0-.947-.476 2.765 2.765 0 0 0-1.755 3.486.75.75 0 0 0 .712.516M6.937 15.44a.74.74 0 0 0 .53-.221 2.775 2.775 0 0 0 .002-3.908.75.75 0 0 0-1.064 1.059c.492.494.493 1.297 0 1.79a.748.748 0 0 0 .532 1.28M14.06 5.402a.75.75 0 0 0-1.257.818l.547.84a.75.75 0 0 0 1.037.22.75.75 0 0 0 .22-1.038z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.955 10.58c0-1.323 1.077-2.4 2.402-2.4a2.404 2.404 0 0 1 2.402 2.4 2.404 2.404 0 0 1-2.402 2.4 2.404 2.404 0 0 1-2.402-2.4m1.5 0a.902.902 0 0 1 1.804 0 .903.903 0 0 1-1.804 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrobeBulk;
