import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentCloudBroken = ({
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
      d="M19.433 12.472V8.954c0-.525-.203-1.03-.567-1.408l-3.762-3.92A2.04 2.04 0 0 0 13.635 3H8.026a3.72 3.72 0 0 0-3.732 3.63v10.428a3.725 3.725 0 0 0 3.643 3.806"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.115 5.934a2.54 2.54 0 0 0 2.535 2.541h2.72M12.676 21c-.23 0-.535-.049-.84-.172a2.09 2.09 0 0 1-1.233-1.91c.006-1.28.927-2.083 2.075-2.093 0-.826.648-2.477 2.477-2.477 1.83 0 2.476 1.65 2.476 2.477 1.148.01 2.076.781 2.076 2.094 0 .85-.504 1.583-1.231 1.912-.31.123-.615.169-.847.169"
    />
  </Svg>
);
export default IconlystDcoumentCloudBroken;
