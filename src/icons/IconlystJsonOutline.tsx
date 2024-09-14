import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJsonOutline = ({
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
      d="M12.731 3.004a.75.75 0 0 1-.742.758 8.325 8.325 0 0 0-8.239 8.253 8.32 8.32 0 0 0 8.239 8.235.75.75 0 1 1-.015 1.5 9.82 9.82 0 0 1-9.724-9.727v-.013a9.825 9.825 0 0 1 9.724-9.748.75.75 0 0 1 .757.742"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.294 7.346a.75.75 0 0 1 .995-.367 5.32 5.32 0 0 1 3.082 5.066 5.34 5.34 0 0 1-3.068 5.032.75.75 0 1 1-.637-1.359 3.835 3.835 0 0 0 2.205-3.643v-.072a3.82 3.82 0 0 0-2.21-3.662.75.75 0 0 1-.367-.995"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.708 2.291a2.9 2.9 0 0 0-.793-.023.75.75 0 0 0 .096 1.493q.263.003.524.021c.17.029.381.08.627.163.525.18 1.145.494 1.737.997 1.162.986 2.28 2.751 2.28 5.836 0 1.927-.803 3.371-1.82 4.222-1.037.866-2.22 1.073-3.059.72a3.82 3.82 0 0 1-2.2-3.657v-.072a3.86 3.86 0 0 1 2.201-3.656.75.75 0 0 0-.077-1.387c-3.258-1.122-6.849 1.614-6.849 6.315 0 3.76 1.408 5.926 3.007 7.128 1.553 1.167 3.195 1.359 3.636 1.359h.008a9.825 9.825 0 0 0 9.724-9.748v-.013a9.82 9.82 0 0 0-9.042-9.698m4.924 3.73c.634 1.217 1.047 2.779 1.047 4.757 0 2.363-.994 4.232-2.359 5.373-1.341 1.122-3.12 1.585-4.618.945l-.01-.004-.01-.005A5.32 5.32 0 0 1 8.6 12.022a5.36 5.36 0 0 1 1.28-3.68c-1.558.454-3.005 2.083-3.005 4.921 0 3.333 1.22 5.036 2.408 5.929 1.229.923 2.526 1.056 2.732 1.058a8.325 8.325 0 0 0 8.235-8.253 8.3 8.3 0 0 0-2.618-5.975"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystJsonOutline;
