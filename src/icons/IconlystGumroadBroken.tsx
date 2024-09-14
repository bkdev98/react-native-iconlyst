import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGumroadBroken = ({
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
      d="M15.717 7.448h-6.85a1 1 0 0 0-.998.999v7.43c0 .551.447.999.998.999h6.91a1 1 0 0 0 1-1v-4.133a1 1 0 0 0-1-.999h-3.554a1 1 0 0 0-.998 1v1.086c0 .552.447.999.998.999h1.178"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.717 7.449a.403.403 0 1 1 .806-.002.403.403 0 0 1-.806.002M13.4 13.84a.403.403 0 1 1 .806-.002.403.403 0 0 1-.806.001"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.321 21H8.104c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.322 5.081 5.165 3 8.104 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.567"
    />
  </Svg>
);
export default IconlystGumroadBroken;
