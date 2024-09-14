import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketPlusBroken = ({
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
      d="M15.023 14.881H11.06M13.043 16.863V12.9M18.252 9.076l-3.78-4.973a1.894 1.894 0 0 0-3.015 0l-3.78 4.973M12.965 20.647h4.878c1.132 0 2.609-.774 2.98-2.795l.97-4.653c.646-2.778-.57-4.078-2.877-4.078H7.013c-2.307 0-3.521 1.3-2.876 4.078l.97 4.653c.37 2.021 1.848 2.795 2.98 2.795H9.69"
    />
  </Svg>
);
export default IconlystShoppingBasketPlusBroken;
