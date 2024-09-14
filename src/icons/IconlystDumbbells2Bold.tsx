import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbells2Bold = ({
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
      d="M20.385 14.46c-.335-.485-.866-.78-1.495-.823l-.095-5.3c.667-.09 1.192-.397 1.517-.889.521-.785.437-3.336 0-3.989-.365-.608-1.004-.973-3.19-.959-2.162.022-2.816.408-3.16 1.005-.434.685-.465 3.235.07 4.006.337.487.87.783 1.497.824l.053 5.306c-.649.097-1.159.401-1.477.883-.519.783-.437 3.332 0 3.99.358.591.992.96 3.011.96l.181-.002c2.158-.023 2.813-.409 3.158-1.006.434-.682.466-3.232-.07-4.007M8.757 4.572c-2.143-.307-2.845-.023-3.273.514-.535.61-.952 3.126-.538 3.973.257.528.737.901 1.353 1.04l-.75 5.252h-.005c-.654 0-1.203.225-1.587.651-.634.695-.937 3.228-.604 3.943.27.657.869 1.125 3.008 1.43.605.086 1.096.125 1.497.125 1.02 0 1.47-.255 1.778-.64.533-.608.95-3.125.538-3.974-.26-.53-.741-.904-1.355-1.039l.71-5.253c.695.01 1.239-.213 1.635-.649.63-.697.935-3.229.602-3.943-.271-.657-.87-1.125-3.01-1.43"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDumbbells2Bold;
