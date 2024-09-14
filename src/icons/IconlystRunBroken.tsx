import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRunBroken = ({
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
      d="M6.475 9.173c1.748-1.687 4.616-1.854 6.486-.303.627.519 1.186 1.126 1.88 1.552 1.287.791 2.88.871 4.39.805"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.639 8.691c-1.058 1.32-2.024 2.579-1.543 4.37.379 1.415 1.781 2.124 1.932 3.63.152 1.516-.66 2.974-1.265 4.308M9.295 15.647c-.699.378-1.364.666-2.162.766-.788.098-1.576.034-2.365.057M15.373 3c1.094 0 1.99.891 1.99 1.99 0 1.1-.896 1.99-1.99 1.99a1.993 1.993 0 0 1-1.99-1.99"
    />
  </Svg>
);
export default IconlystRunBroken;
