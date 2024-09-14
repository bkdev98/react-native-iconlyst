import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainDropletsLight = ({
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
      d="M14.127 17.616c-.408 1.059-1.36 1.757-2.41 1.975-1.777.368-3.795-.952-3.98-3.183-.412-5.095 5.46-8.175 5.46-8.175s-.24 2.46.28 4.932c.308 1.463 1.234 2.936.65 4.451M5.583 9.65c-.85.025-1.61-.43-2.065-1.091-.771-1.121-.445-2.9 1.043-3.675 3.4-1.766 7.235 1.396 7.235 1.396s-1.77.55-3.326 1.627c-.922.638-1.67 1.705-2.887 1.742M20.735 10.395c.407.52.471 1.205.266 1.795-.348.998-1.612 1.612-2.782 1.036-2.669-1.319-2.45-5.175-2.45-5.175s1.158.856 2.548 1.336c.823.284 1.836.263 2.418 1.008"
    />
  </Svg>
);
export default IconlystRainDropletsLight;
