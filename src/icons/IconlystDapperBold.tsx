import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDapperBold = ({
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
      d="M21.533 5.236a.75.75 0 0 0-1.06-.004l-1.318 1.31a.749.749 0 1 0 1.057 1.064l1.317-1.31a.75.75 0 0 0 .004-1.06M17.28 5.68q.07.015.141.014a.75.75 0 0 0 .735-.61l.18-.939a.75.75 0 0 0-.596-.877.747.747 0 0 0-.877.596l-.18.94a.75.75 0 0 0 .596.876M14.194 14.23a2.105 2.105 0 0 1-2.1-2.105 2.101 2.101 0 0 1 4.201 0c0 1.16-.943 2.104-2.1 2.104m-6.584 0a2.105 2.105 0 0 1-2.1-2.105 2.101 2.101 0 0 1 4.201 0c0 1.16-.943 2.104-2.1 2.104m3.292-9.736c-4.633 0-8.402 3.768-8.402 8.4v4.221c0 1.047.422 2.065 1.155 2.792a3.92 3.92 0 0 0 2.796 1.167h8.89a3.93 3.93 0 0 0 2.802-1.157 3.94 3.94 0 0 0 1.161-2.802v-4.22c0-4.633-3.769-8.4-8.402-8.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDapperBold;
