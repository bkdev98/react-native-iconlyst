import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColdDrinkBulk = ({
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
      d="M6.556 11.033c1.781-1.005 4.225-.863 5.842.433a3 3 0 0 0 .297.206c.568.367 1.284.559 2.013.559.67 0 1.328-.163 1.876-.474a.75.75 0 0 1 1.1.48q.041.133.03.283l-.598 6.765a2.705 2.705 0 0 1-2.693 2.465H9.219a2.705 2.705 0 0 1-2.697-2.51l-.532-7.426a.75.75 0 0 1 .566-.78"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.23 5.836.295-1.619a.57.57 0 0 1 .748-.434l1.966.69a.75.75 0 0 0 .497-1.415l-1.968-.69a2.07 2.07 0 0 0-2.718 1.58l-.345 1.888h-4.24A2.703 2.703 0 0 0 5.77 8.733l.753 10.508a2.705 2.705 0 0 0 2.697 2.51h5.203c1.402 0 2.57-1.071 2.694-2.466l.927-10.508a2.704 2.704 0 0 0-2.694-2.94zm-1.8 1.5-1.619 8.866a.75.75 0 0 0 1.476.27l1.669-9.136h1.394c.707 0 1.262.606 1.2 1.31l-.927 10.507a1.205 1.205 0 0 1-1.2 1.097H9.22c-.63 0-1.155-.488-1.201-1.117L7.266 8.625a1.203 1.203 0 0 1 1.2-1.289z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystColdDrinkBulk;
