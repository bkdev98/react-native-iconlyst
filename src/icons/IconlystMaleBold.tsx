import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaleBold = ({
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
      d="M12.017 2.5a3.283 3.283 0 1 0 0 6.565 3.283 3.283 0 0 0 0-6.565M13.47 11.44h-2.937c-.438 0-.791 0-1.073.018-.285.018-.547.058-.783.165a2.08 2.08 0 0 0-1.224 1.84c-.007.26.058.516.151.786.092.267.229.593.398.997l1.47 3.501c.255.61.456 1.09.634 1.447.175.35.36.659.614.859a2.08 2.08 0 0 0 2.58-.003c.252-.2.438-.51.611-.86.178-.358.378-.839.632-1.448l1.46-3.502c.168-.403.304-.729.395-.995.093-.27.156-.527.15-.785a2.08 2.08 0 0 0-1.226-1.838c-.236-.106-.496-.146-.781-.164-.281-.019-.634-.019-1.071-.019"
    />
  </Svg>
);
export default IconlystMaleBold;
