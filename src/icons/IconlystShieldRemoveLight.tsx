import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldRemoveLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.324 13.628c0 6.114-7.324 8.331-7.324 8.331s-7.323-2.216-7.323-8.33c0-6.115-.267-6.593.32-7.18.59-.589 6.043-2.49 7.003-2.49s6.413 1.896 7 2.49c.59.592.324 1.066.324 7.18M10.206 14.53l3.588-3.587m0 3.588-3.588-3.588z"
    />
  </Svg>
);
export default IconlystShieldRemoveLight;
