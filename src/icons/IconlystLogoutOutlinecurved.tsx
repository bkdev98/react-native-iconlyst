import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutOutlinecurved = ({
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
      d="M9 12.12a.75.75 0 0 1 .75-.75h12.041a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.333 8.675a.75.75 0 0 1 1.06-.002l2.928 2.916a.75.75 0 0 1 0 1.063l-2.928 2.916a.75.75 0 0 1-1.058-1.063l2.394-2.384-2.394-2.385a.75.75 0 0 1-.002-1.06M14.288 4.45c.777.576 1.165 1.516 1.325 3.249a.75.75 0 1 0 1.494-.138c-.17-1.848-.617-3.347-1.926-4.316C13.927 2.315 12.037 2 9.36 2c-3.55 0-5.733.556-6.853 2.38-.533.869-.77 1.945-.884 3.177-.114 1.228-.114 2.702-.114 4.411v.063c0 1.71 0 3.184.114 4.411.115 1.233.35 2.309.884 3.178C3.627 21.443 5.81 22 9.36 22c2.677 0 4.567-.316 5.821-1.245 1.309-.97 1.755-2.468 1.926-4.316a.75.75 0 1 0-1.494-.138c-.16 1.732-.548 2.673-1.325 3.249-.83.615-2.276.95-4.928.95-3.551 0-4.92-.599-5.574-1.665-.354-.576-.562-1.379-.67-2.531-.106-1.15-.107-2.557-.107-4.304s0-3.154.108-4.304c.107-1.153.315-1.955.668-2.531C4.442 4.098 5.81 3.5 9.36 3.5c2.652 0 4.098.334 4.928.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogoutOutlinecurved;
