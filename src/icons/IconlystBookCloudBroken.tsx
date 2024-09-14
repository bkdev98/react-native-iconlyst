import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookCloudBroken = ({
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
      d="M19.57 16.026H7.175a2.486 2.486 0 1 0 0 4.974h5.164"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.568 14.98.007 4.824A1.2 1.2 0 0 1 18.377 21h-2.8M18.509 12.2c.207 0 .482-.043.757-.155a1.89 1.89 0 0 0 1.11-1.72c0-1.182-.836-1.876-1.87-1.885 0-.743-.582-2.231-2.23-2.231-1.646 0-2.23 1.488-2.23 2.231-1.033.009-1.868.703-1.868 1.886 0 .764.453 1.425 1.108 1.72a2.1 2.1 0 0 0 .762.153h1.438M8.49 16.026V6.006"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.688 18.513V5.591A2.59 2.59 0 0 1 7.278 3H18.37a1.2 1.2 0 0 1 1.199 1.199v.43"
    />
  </Svg>
);
export default IconlystBookCloudBroken;
