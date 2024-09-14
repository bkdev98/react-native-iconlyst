import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDDisplayOutline = ({
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
      d="M2.334 7.685c0-2.639 2.14-4.779 4.778-4.779h9.943a4.78 4.78 0 0 1 4.779 4.78v5.456c0 2.64-2.14 4.779-4.78 4.779H7.113a4.78 4.78 0 0 1-4.778-4.78zm4.778-3.279a3.28 3.28 0 0 0-3.278 3.28v5.456a3.28 3.28 0 0 0 3.278 3.279h9.943a3.28 3.28 0 0 0 3.279-3.28V7.686a3.28 3.28 0 0 0-3.28-3.279zM6.838 20.344a.75.75 0 0 1 .75-.75h8.991a.75.75 0 1 1 0 1.5H7.588a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.867 7.285a.75.75 0 0 1 .75.75V9.78h1.827V8.035a.75.75 0 0 1 1.5 0v4.99a.75.75 0 0 1-1.5 0V11.28H8.617v1.745a.75.75 0 0 1-1.5 0v-4.99a.75.75 0 0 1 .75-.75M12.94 8.035a.75.75 0 0 1 .75-.75h.831a3.245 3.245 0 0 1 0 6.49h-.832a.75.75 0 0 1-.75-.75zm1.5.75v3.49h.081a1.745 1.745 0 0 0 0-3.49z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHDDisplayOutline;
