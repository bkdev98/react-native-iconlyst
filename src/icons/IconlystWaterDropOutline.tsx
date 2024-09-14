import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterDropOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.327 13.315a.75.75 0 0 1 .735.765v.003c-.024 1.236 1.216 2.283 2.543 2.266a.75.75 0 1 1 .019 1.5c-1.944.024-4.107-1.5-4.062-3.795v-.004a.75.75 0 0 1 .765-.735"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.524 21.746c-1.99 0-4.08-.9-5.59-2.42-1.37-1.38-2.11-3.11-2.07-4.87-.1-6.62 7-11.84 7.31-12.06a.75.75 0 0 1 .88 0c.3.22 7.42 5.46 7.31 12.08.04 1.74-.7 3.47-2.07 4.85-1.53 1.54-3.66 2.43-5.69 2.42zm.08-1.5c1.66.02 3.37-.72 4.62-1.98 1.08-1.09 1.66-2.44 1.64-3.78.08-4.99-4.74-9.31-6.25-10.53-1.5 1.22-6.33 5.54-6.25 10.5v.09c-.02 1.3.56 2.64 1.64 3.74 1.25 1.26 2.95 1.98 4.6 1.98z"
    />
  </Svg>
);
export default IconlystWaterDropOutline;
