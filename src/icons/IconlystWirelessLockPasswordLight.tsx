import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessLockPasswordLight = ({
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
      d="M12.038 19.96 3.386 9.675a1.45 1.45 0 0 1 .096-1.964c4.955-4.902 12.187-4.895 17.134.022.526.522.581 1.357.119 1.936l-.97 1.214"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.036 19.96h2.56c.702 0 1.27-.569 1.27-1.27v-1.438c0-.701-.568-1.27-1.27-1.27h-2.56c-.701 0-1.27.569-1.27 1.27v1.438c0 .701.569 1.27 1.27 1.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.845 16.007v-.946a1.529 1.529 0 0 0-3.056-.007v.953"
    />
  </Svg>
);
export default IconlystWirelessLockPasswordLight;
