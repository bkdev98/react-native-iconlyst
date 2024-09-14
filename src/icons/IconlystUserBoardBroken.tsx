import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBoardBroken = ({
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
      d="M14.347 19.643H17.8c2.836 0 4.6-2.001 4.6-4.834v-3.29M22.4 8.228c0-2.832-1.764-4.833-4.599-4.833h-7.706c-2.02 0-3.502 1.022-4.183 2.64M18.27 16.32h-2.305M6.834 20.604c2.392 0 4.434-.362 4.434-1.808 0-1.448-2.03-1.823-4.434-1.823-2.392 0-4.434.36-4.434 1.81 0 .814.642 1.289 1.632 1.548M9.606 11.703a2.664 2.664 0 1 1-2.664-2.664"
    />
  </Svg>
);
export default IconlystUserBoardBroken;
