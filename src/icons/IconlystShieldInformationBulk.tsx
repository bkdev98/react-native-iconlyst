import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldInformationBulk = ({
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
      fillRule="evenodd"
      d="M19.356 5.136C18.651 4.43 13.024 2.5 12 2.5S5.35 4.43 4.644 5.137c-.56.562-.553.996-.509 3.398.017.974.042 2.3.042 4.135 0 6.407 7.601 8.785 7.678 8.808a.48.48 0 0 0 .291 0c.076-.023 7.678-2.401 7.678-8.808 0-1.831.024-3.156.041-4.128.044-2.408.052-2.842-.509-3.406"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.003 15.78a.75.75 0 0 0 .75-.75v-3.79a.75.75 0 0 0-1.5 0v3.79c0 .414.336.75.75.75M12.747 8.18a.737.737 0 0 0-.75-.735.763.763 0 0 0-.75.765.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystShieldInformationBulk;
