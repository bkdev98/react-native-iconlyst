import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRulerBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="m21.137 6.537-2.49-2.49a3.55 3.55 0 0 0-2.575-1.042 3.57 3.57 0 0 0-2.497 1.048l-9.34 9.343a3.56 3.56 0 0 0-1.049 2.551 3.58 3.58 0 0 0 1.048 2.517l2.49 2.49A3.55 3.55 0 0 0 9.3 21.996a3.58 3.58 0 0 0 2.497-1.048l9.341-9.343a3.56 3.56 0 0 0 1.048-2.528v-.023a3.58 3.58 0 0 0-1.048-2.517"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m4.204 13.427 2.399 2.399a.75.75 0 0 0 1.06-1.06l-2.398-2.4h-.001l-1.03 1.03zM6.977 10.653l3.045 3.11a.75.75 0 0 0 1.072-1.05l-3.05-3.115-.007-.006zM9.684 7.944l1.714 1.714a.75.75 0 0 0 1.06-1.061l-1.713-1.713zM12.424 5.204h.002l3.083 3.084a.75.75 0 1 0 1.06-1.06l-3.083-3.084h-.001z"
    />
  </Svg>
);
export default IconlystRulerBulk;
