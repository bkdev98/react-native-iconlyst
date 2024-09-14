import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldInformationBold = ({
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
      d="M12.753 15.03a.75.75 0 0 1-1.5 0v-3.79a.75.75 0 0 1 1.5 0zm-.756-7.585c.414 0 .75.32.75.734v.031a.75.75 0 0 1-1.5 0c0-.414.336-.765.75-.765m7.359-2.309C18.65 4.43 13.024 2.5 12 2.5S5.349 4.43 4.644 5.137c-.561.562-.553.996-.51 3.398.018.974.043 2.3.043 4.135 0 6.407 7.6 8.785 7.678 8.808a.48.48 0 0 0 .29 0c.077-.023 7.679-2.401 7.679-8.808 0-1.831.024-3.156.04-4.128.045-2.408.053-2.842-.508-3.406"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldInformationBold;
