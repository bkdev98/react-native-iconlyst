import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDapperBulk = ({
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
      d="M11.402 4.494C6.77 4.494 3 8.262 3 12.894v4.221c0 1.047.422 2.065 1.155 2.792a3.92 3.92 0 0 0 2.796 1.167h8.89a3.93 3.93 0 0 0 2.802-1.157 3.94 3.94 0 0 0 1.161-2.802v-4.22c0-4.633-3.769-8.4-8.402-8.4"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.593 12.125c0 1.16.943 2.104 2.101 2.104a2.105 2.105 0 0 0 2.101-2.104 2.101 2.101 0 0 0-4.202 0M6.01 12.125c0 1.16.942 2.104 2.1 2.104a2.105 2.105 0 0 0 2.101-2.104 2.101 2.101 0 0 0-4.202 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.033 5.237a.75.75 0 0 0-1.06-.004l-1.318 1.31a.749.749 0 1 0 1.057 1.064l1.317-1.31a.75.75 0 0 0 .004-1.06M17.78 5.681q.07.015.142.014a.75.75 0 0 0 .735-.61l.18-.939a.75.75 0 0 0-.596-.877.747.747 0 0 0-.878.596l-.18.94a.75.75 0 0 0 .596.876"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDapperBulk;
