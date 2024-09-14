import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookErrorBold = ({
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
      d="M13.311 18.002h-2.616a.75.75 0 0 1 0-1.5h2.616a.75.75 0 0 1 0 1.5m8.031-.682-1.23-2.677H3.893l-1.247 2.715a2.35 2.35 0 0 0 2.205 3.155h14.302a2.35 2.35 0 0 0 1.924-1.003 2.36 2.36 0 0 0 .265-2.19M12.003 11.453q-.031 0-.062-.002a.74.74 0 0 1-.686-.799l.002-.023a.756.756 0 0 1 .81-.685.75.75 0 0 1 .686.81.76.76 0 0 1-.75.7m-.755-5.24a.75.75 0 0 1 1.5 0v2.223a.75.75 0 0 1-1.5 0zm8.714.208a2.94 2.94 0 0 0-2.936-2.935H6.979a2.94 2.94 0 0 0-2.936 2.935v6.721h15.919z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookErrorBold;
