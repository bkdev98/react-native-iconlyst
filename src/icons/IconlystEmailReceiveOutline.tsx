import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailReceiveOutline = ({
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
      d="M7.817 20.85a5.05 5.05 0 0 1-3.642-1.48A5.96 5.96 0 0 1 2.5 15.09V8.913A5.44 5.44 0 0 1 7.832 3.15h8.836A5.44 5.44 0 0 1 22 8.913v1.677a.75.75 0 1 1-1.5 0V8.913c0-2.47-1.611-4.263-3.832-4.263H7.832C5.611 4.65 4 6.443 4 8.913v6.177a4.47 4.47 0 0 0 1.234 3.213 3.58 3.58 0 0 0 2.585 1.043h4.349a.75.75 0 1 1 0 1.5H7.817z"
    />
    <Path
      fill={props.color}
      d="M18.126 20.564a.75.75 0 0 1-.53-.22l-2.571-2.562a.75.75 0 0 1 0-1.061l2.572-2.562a.75.75 0 1 1 1.058 1.063l-2.038 2.03 2.038 2.03a.75.75 0 0 1-.53 1.282"
    />
    <Path
      fill={props.color}
      d="M21.25 18.004h-5.7a.75.75 0 1 1 0-1.5h5.7a.75.75 0 1 1 0 1.5M12.272 13.62a2.8 2.8 0 0 1-1.75-.614L6.483 9.75a.75.75 0 1 1 .942-1.168l4.033 3.252a1.314 1.314 0 0 0 1.638 0l3.99-3.246a.75.75 0 1 1 .946 1.163l-4 3.253a2.83 2.83 0 0 1-1.76.616"
    />
  </Svg>
);
export default IconlystEmailReceiveOutline;
