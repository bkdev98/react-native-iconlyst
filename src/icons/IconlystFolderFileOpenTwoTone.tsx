import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileOpenTwoTone = ({
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
      d="M8.9 17.781c-.301 1.314-1.826 2.643-3.464 1.56 0 0 1.06.943 3.215.943h9.4a2.494 2.494 0 0 0 2.437-1.965l1.175-5.78c.35-1.81-.845-2.67-2.436-2.67h-6.6c-1.17 0-2.184.815-2.435 1.958z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.652 20.285c-3.101 0-4.927-1.822-4.927-4.915V8.628c0-3.089 1.136-4.911 4.229-4.911h1.729c.62 0 1.204.293 1.576.789l.79 1.05c.373.495.957.787 1.578.789h1.46c2.672 0 3.891 1.172 4.176 3.517"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFolderFileOpenTwoTone;
