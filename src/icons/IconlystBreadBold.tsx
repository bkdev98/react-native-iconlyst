import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBreadBold = ({
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
      d="M16.826 21.283c-1.276.247-2.626-.237-3.861-.892-3.687-1.956-6.546-4.826-8.833-8.285-1.04-1.572-2.04-3.498-1.48-5.426.476-1.64 2.33-2.855 3.854-3.416 1.667-.613 3.583-.75 5.334-.485.845.128 1.655.346 2.421.64.177.068.16.324-.02.385a8.06 8.06 0 0 0-2.995 1.828.75.75 0 0 0 1.034 1.087c1.318-1.254 2.438-2.03 4.195-2.048.085 0 .169.027.237.08.422.322 1.237.943 1.608 1.315.112.113.048.305-.109.339-1.22.263-2.817.929-4.243 2.485a.75.75 0 1 0 1.106 1.013c1.67-1.823 3.597-2.138 4.43-2.152a.36.36 0 0 1 .311.17c.42.65.77 1.34 1.04 2.055.05.131-.05.27-.19.273-1.069.028-2.825.384-4.435 1.915a.75.75 0 1 0 1.034 1.087c1.24-1.18 2.4-1.226 3.892-1.46a.2.2 0 0 1 .228.163c.35 2.164-.023 4.449-1.322 6.55-.733 1.185-1.771 2.494-3.236 2.779"
    />
  </Svg>
);
export default IconlystBreadBold;
