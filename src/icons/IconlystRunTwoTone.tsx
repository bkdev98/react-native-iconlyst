import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRunTwoTone = ({
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
      d="M6.975 9.173c1.748-1.687 4.616-1.854 6.486-.303.627.519 1.186 1.126 1.88 1.552 1.287.791 2.88.871 4.39.805"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.139 8.692c-1.058 1.32-2.024 2.579-1.543 4.37.379 1.415 1.781 2.124 1.932 3.63.152 1.516-.66 2.974-1.265 4.308"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.795 15.647c-.699.378-1.364.666-2.162.766-.788.098-1.576.034-2.365.057"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.873 6.98c1.094 0 1.99-.89 1.99-1.99 0-1.099-.896-1.99-1.99-1.99-1.095 0-1.99.891-1.99 1.99 0 1.1.895 1.99 1.99 1.99"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRunTwoTone;
