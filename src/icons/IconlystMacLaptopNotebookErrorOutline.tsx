import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookErrorOutline = ({
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
      d="M12.246 6.088a.75.75 0 0 1 .75.75V9.06a.75.75 0 0 1-1.5 0V6.838a.75.75 0 0 1 .75-.75m.028 4.432a.75.75 0 0 1 .729.77l-.002.07a.75.75 0 0 1-1.5-.041l.002-.07a.75.75 0 0 1 .77-.729"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.04 6.424a3.185 3.185 0 0 1 3.186-3.186h10.048a3.185 3.185 0 0 1 3.185 3.186v7.84l1.358 2.954.023.055a2.597 2.597 0 0 1-2.44 3.492H5.1a2.598 2.598 0 0 1-2.416-3.547l1.358-2.954zm3.186-1.686c-.93 0-1.685.754-1.685 1.686v8.005a.75.75 0 0 1-.069.313L4.06 17.814c-.242.71.285 1.45 1.039 1.45H19.4c.754 0 1.28-.741 1.039-1.45l-1.412-3.072a.75.75 0 0 1-.069-.314V6.425c0-.932-.754-1.686-1.685-1.686z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.193 17.254a.75.75 0 0 1 .75-.75h2.616a.75.75 0 0 1 0 1.5h-2.616a.75.75 0 0 1-.75-.75M4.059 14.428a.75.75 0 0 1 .75-.75h14.884a.75.75 0 0 1 0 1.5H4.81a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookErrorOutline;
