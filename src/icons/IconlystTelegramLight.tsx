import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramLight = ({
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
      d="m12.513 15.96-2.325 1.987a.714.714 0 0 1-1.163-.401l-.886-4.361-4.297-.545c-.982-.125-1.159-1.471-.243-1.846l16.144-6.607a.91.91 0 0 1 1.233 1.046l-3.17 13.876a.996.996 0 0 1-1.675.483l-5.28-5.278M8.139 13.182l7.29-4.909"
    />
  </Svg>
);
export default IconlystTelegramLight;
