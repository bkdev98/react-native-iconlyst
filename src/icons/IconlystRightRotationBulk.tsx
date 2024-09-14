import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightRotationBulk = ({
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
      d="M17.786 8.555a9.3 9.3 0 0 0-5.406-1.746c-5.172 0-9.38 4.208-9.38 9.38a1 1 0 1 0 2 0c0-4.07 3.311-7.38 7.38-7.38 1.436 0 2.808.427 3.972 1.18z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m21.613 12.937-.625-5.18a1.078 1.078 0 0 0-1.83-.633l-4.555 4.555a1.08 1.08 0 0 0 0 1.524c.167.167.388.278.632.307l5.18.625a1.075 1.075 0 0 0 1.198-1.198"
    />
  </Svg>
);
export default IconlystRightRotationBulk;
