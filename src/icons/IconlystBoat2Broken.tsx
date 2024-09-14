import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.126 21.05h5.387c.61 0 1.176-.317 1.497-.834l2.49-4.029h-18l1.622 3.794A1.76 1.76 0 0 0 6.74 21.05h2.693M10.076 13.567c1.196-2.732 1.407-6.14.541-10.12 0 0 7.884 2.485 7.278 10.268l-3.91-.074"
    />
  </Svg>
);
export default IconlystBoat2Broken;
