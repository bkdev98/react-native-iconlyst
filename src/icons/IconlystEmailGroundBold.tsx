import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailGroundBold = ({
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
      d="m15.01 8.98-1.3 3.8c-.26.92-1.25 1.62-2.23 1.62-.1 0-.19 0-.29-.02l-3.98-.5a.737.737 0 0 1-.65-.83c.05-.42.43-.71.83-.65l4 .5c.35.05.79-.24.89-.56l1.31-3.84c.14-.39.56-.61.95-.47.4.14.6.56.47.95M21 18.69h-3.92l2.28-1.43c2.23-1.37 2.77-4.25 1.26-6.69l-2.7-4.29c-.7-1.14-1.74-1.96-2.93-2.3-1.24-.35-2.53-.16-3.66.54l-6.69 4.3c-1.12.69-1.85 1.77-2.06 3.04-.19 1.21.09 2.5.8 3.65l2.04 3.18H3c-.41 0-.75.34-.75.75s.34.75.75.75h18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailGroundBold;
