import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldBroken = ({
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
      d="M19.574 12.67c0 6.113-7.324 8.33-7.324 8.33s-7.323-2.216-7.323-8.33c0-6.115-.267-6.592.32-7.18C5.838 4.9 11.29 3 12.25 3s6.413 1.896 7.002 2.49c.587.592.322 1.066.322 7.18M12.25 21V6.5m-7.325 4.102H16.75"
    />
  </Svg>
);
export default IconlystShieldBroken;
