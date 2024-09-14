import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondBulk = ({
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
      fill={props.color}
      d="M12.106 2.645c-1.18-.016-2.381.493-3.413 1.523L4.02 8.84c-1.976 1.985-2.034 4.587-.142 6.475l4.957 4.96c.924.922 2.016 1.382 3.12 1.382q.075 0 .15-.002z"
    />
    <Path
      fill={props.color}
      d="M12.106 21.653V2.645c1.086.015 2.155.474 3.062 1.382l4.957 4.96c.9.899 1.377 1.975 1.377 3.108 0 1.188-.54 2.381-1.52 3.36l-4.671 4.679c-.971.97-2.092 1.478-3.205 1.52"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiamondBulk;
