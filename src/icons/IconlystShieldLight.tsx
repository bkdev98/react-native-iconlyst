import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLight = ({
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
      d="M19.324 13.628c0 6.114-7.324 8.331-7.324 8.331s-7.323-2.216-7.323-8.33c0-6.115-.267-6.593.32-7.18.59-.589 6.043-2.49 7.003-2.49s6.413 1.896 7.002 2.49c.587.592.322 1.066.322 7.18M4.675 11.561h14.65M12 21.96v-18z"
    />
  </Svg>
);
export default IconlystShieldLight;