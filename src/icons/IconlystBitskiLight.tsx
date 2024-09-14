import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitskiLight = ({
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
      d="m14.062 18.397 5.21-5.208a3.72 3.72 0 0 0 1.127-2.619 3.72 3.72 0 0 0-1.08-2.639 3.72 3.72 0 0 0-2.639-1.077c-.979.01-1.939.424-2.618 1.13l-5.205 5.205"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 9.284A3.679 3.679 0 0 0 7.556 4.08L3.652 7.983l10.41 10.414M3.652 13.188l7.808 7.81"
    />
  </Svg>
);
export default IconlystBitskiLight;
