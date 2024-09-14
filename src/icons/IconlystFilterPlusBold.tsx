import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterPlusBold = ({
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
      d="M12.23 5.98h-1.81a.75.75 0 0 1 0-1.5h1.81V2.67a.75.75 0 0 1 1.5 0v1.81h1.81a.75.75 0 0 1 0 1.5h-1.81v1.81a.75.75 0 0 1-1.5 0z"
    />
    <Path
      fill={props.color}
      d="M18.203 3.938h.874a3.19 3.19 0 0 1 3.185 3.185v1.363a4.28 4.28 0 0 1-1.413 3.173l-4.906 4.856a1.05 1.05 0 0 0-.361.787v1.99c0 .84-.506 1.583-1.286 1.893l-1.881.75a2.04 2.04 0 0 1-1.9-.206 2.04 2.04 0 0 1-.894-1.688v-3.226c0-.276-.108-.538-.305-.736l-4.344-3.866A4.25 4.25 0 0 1 3.7 9.174v-2.05a3.19 3.19 0 0 1 3.185-3.185h.87c.235 0 .383.26.305.481-.09.254-.14.526-.14.811 0 1.307 1.01 2.34 2.261 2.483a.36.36 0 0 1 .317.317c.143 1.25 1.176 2.26 2.483 2.26 1.306 0 2.339-1.01 2.482-2.26a.36.36 0 0 1 .317-.317c1.25-.143 2.26-1.176 2.26-2.483 0-.285-.05-.557-.14-.812-.078-.22.07-.48.304-.48"
    />
  </Svg>
);
export default IconlystFilterPlusBold;
