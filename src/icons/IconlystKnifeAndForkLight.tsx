import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKnifeAndForkLight = ({
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
      d="M18.241 20.25c0 .522-.319.853-.74.72-.264-.084-3.38-2.172-3.015-9.665.059-.777.396-1.302.975-1.7.569-.394.719-.888.663-1.547-.13-1.56-.22-2.174-.307-3.737-.044-.788.538-1.36 1.297-1.319.658.036 1.126.573 1.127 1.321.004 2.853.004 14.23 0 15.926"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.775 3.375c.065 1.46.136 2.92.194 4.38.038.946-.286 1.76-.994 2.387-.97.857-1.208 1.913-1.076 3.165.241 2.31.418 3.68.583 5.996.066.93-.77 1.697-1.618 1.697s-1.684-.767-1.618-1.697c.166-2.316.342-3.686.583-5.996.132-1.252-.107-2.308-1.076-3.165-.708-.627-1.032-1.44-.994-2.387.058-1.46.13-2.92.194-4.38M7.885 6.49l.01-3.038M9.834 6.49l.01-3.038"
    />
  </Svg>
);
export default IconlystKnifeAndForkLight;
