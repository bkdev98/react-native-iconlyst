import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLikeOutline = ({
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
      d="M15.38 15.599a.75.75 0 0 1-.484-.176c-.114-.1-2.787-2.377-2.886-4.923a3.32 3.32 0 0 1 3.024-3.636c.505-.02 1.007.08 1.466.289.3.146.569.35.79.6a2.6 2.6 0 0 1 .99-.127c.5.048.983.216 1.407.488a3.32 3.32 0 0 1 .784 4.667c-1.413 2.156-4.817 2.77-4.96 2.8a1 1 0 0 1-.132.018m-.216-7.235h-.063a1.837 1.837 0 0 0-1.593 2.07c.054 1.379 1.347 2.89 2.088 3.6.8-.2 2.781-.79 3.617-2.063a1.83 1.83 0 0 0-.34-2.591 1.66 1.66 0 0 0-.738-.255c-.28.018-.553.091-.805.215a.75.75 0 0 1-.866-.231 2.3 2.3 0 0 0-.59-.591 1.7 1.7 0 0 0-.71-.154"
    />
    <Path
      fill={props.color}
      d="M13.237 21.75H7.72a4.375 4.375 0 0 1-4.37-4.369V6.61a4.33 4.33 0 0 1 1.28-3.079c.82-.82 1.931-1.28 3.09-1.281h5.517a4.37 4.37 0 0 1 4.369 4.36V8.4a.75.75 0 1 1-1.5 0V6.61a2.87 2.87 0 0 0-2.87-2.86H7.72a2.89 2.89 0 0 0-2.653 1.769A2.8 2.8 0 0 0 4.85 6.61v10.771a2.873 2.873 0 0 0 2.87 2.869h5.517a2.87 2.87 0 0 0 2.869-2.869v-2.948a.75.75 0 1 1 1.5 0v2.948a4.374 4.374 0 0 1-4.37 4.369"
    />
    <Path fill={props.color} d="M10.479 18.006a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </Svg>
);
export default IconlystPhoneLikeOutline;
