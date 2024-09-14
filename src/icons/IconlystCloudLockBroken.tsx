import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLockBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.814 17.518a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.139-4.103-4.14 0-1.632-1.28-4.899-4.897-4.899M5.686 17.518a4.14 4.14 0 0 1-2.436-3.775c0-2.595 1.833-4.12 4.103-4.14 0-1.064.545-2.824 1.927-3.92M10.768 19.943c-.813 0-1.473-.66-1.473-1.473v-1.667c0-.813.66-1.473 1.473-1.473h2.968c.814 0 1.474.66 1.474 1.473v1.667c0 .813-.66 1.473-1.474 1.473"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.022 15.36v-1.096a1.772 1.772 0 0 0-3.543-.008v1.104"
    />
  </Svg>
);
export default IconlystCloudLockBroken;
