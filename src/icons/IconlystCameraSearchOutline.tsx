import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraSearchOutline = ({
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
      d="M10.303 4.887c-.54 0-1.036.293-1.297.765a18 18 0 0 1-.422.728 4.3 4.3 0 0 1-.422.595l-.012.013a2.64 2.64 0 0 1-1.838.818A2.31 2.31 0 0 0 4 10.114v5.642a3.356 3.356 0 0 0 3.356 3.357h9.788a3.357 3.357 0 0 0 3.356-3.357v-5.644a2.31 2.31 0 0 0-2.339-2.313 2.63 2.63 0 0 1-1.81-.814l-.013-.013a4 4 0 0 1-.413-.586c-.132-.22-.272-.47-.402-.714a1.48 1.48 0 0 0-1.308-.785zm-2.61.04a2.98 2.98 0 0 1 2.61-1.54h3.912c1.104 0 2.112.609 2.63 1.578.124.23.25.456.363.644.117.192.197.304.235.348.2.207.473.33.76.343A3.81 3.81 0 0 1 22 10.112v5.644a4.857 4.857 0 0 1-4.856 4.857H7.356A4.856 4.856 0 0 1 2.5 15.756v-5.642a3.81 3.81 0 0 1 3.794-3.808c.29-.015.561-.138.763-.345q.064-.07.25-.368c.121-.196.255-.43.386-.666"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.423 9.07a.75.75 0 0 1 .75.75v.059a.75.75 0 0 1-1.5 0V9.82a.75.75 0 0 1 .75-.75M12.247 11.066a2.082 2.082 0 1 0 0 4.164 2.082 2.082 0 0 0 0-4.164M8.665 13.15a3.582 3.582 0 1 1 7.165 0 3.583 3.583 0 1 1-7.165 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.646 14.693a.75.75 0 0 1 1.06-.001l1.426 1.422a.75.75 0 1 1-1.06 1.062l-1.425-1.422a.75.75 0 0 1-.001-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraSearchOutline;
