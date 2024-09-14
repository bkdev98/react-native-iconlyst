import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebflowLight = ({
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
      d="M11.374 11.202c-1.65 3.044-1.799 6.989-6.346 7.191-.675-4.208-1.34-8.352-2.028-12.65C5.099 5.86 6.36 6.83 6.796 8.52c.395 1.531.39 3.165.582 4.932 1.749-2.91 1.555-7.193 6.26-7.843l1.02 7.395c.106.024.938-2.018 1.367-3.011.431-1 .842-2.103 1.577-2.85.738-.75 3.205-1.303 3.398-1.129-1.578 3.56-3.057 7.168-4.787 10.651-.63 1.27-2.043 1.826-3.749 1.656z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebflowLight;
