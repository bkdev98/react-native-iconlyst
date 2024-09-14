import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaleBulk = ({
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
      d="M13.47 11.44h-2.937c-.438 0-.791 0-1.073.018-.285.019-.547.058-.783.165a2.08 2.08 0 0 0-1.224 1.84c-.007.26.058.516.151.786.092.267.229.593.398.997l1.47 3.502c.255.609.456 1.089.634 1.447.175.35.36.658.614.858a2.08 2.08 0 0 0 2.58-.003c.252-.2.438-.509.611-.86.178-.358.378-.838.632-1.448l1.46-3.501c.168-.404.304-.73.395-.996.093-.27.156-.526.15-.785a2.08 2.08 0 0 0-1.226-1.838c-.236-.106-.496-.145-.781-.164a18 18 0 0 0-1.071-.018"
    />
    <Path
      fill={props.color}
      d="M12.017 2.5a3.283 3.283 0 1 0 0 6.565 3.283 3.283 0 0 0 0-6.565"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMaleBulk;
