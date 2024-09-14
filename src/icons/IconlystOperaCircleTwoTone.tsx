import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOperaCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.826 8.175a5.411 5.411 0 1 1-7.652 7.652 5.411 5.411 0 0 1 7.652-7.652"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.267 8.943c1.526 1.69 1.526 4.43 0 6.12s-4 1.69-5.527 0c-1.526-1.69-1.526-4.43 0-6.12s4-1.69 5.527 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.7 9.79c.94 1.222.94 3.202 0 4.423-.939 1.22-2.461 1.22-3.4 0-.94-1.221-.94-3.201 0-4.422.938-1.221 2.461-1.221 3.4 0"
    />
  </Svg>
);
export default IconlystOperaCircleTwoTone;
