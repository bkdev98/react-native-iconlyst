import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordUserTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.974 3.285h5.053c1.766 0 2.865 1.247 2.865 3.011v4.76c0 1.765-1.099 3.012-2.866 3.012H9.974c-1.766 0-2.864-1.247-2.864-3.012v-4.76c0-1.764 1.103-3.01 2.864-3.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.698 14.012v-.492c0-.913.723-2.055 2.8-2.055 2.08 0 2.804 1.13 2.804 2.045v.502"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.289 7.644a1.79 1.79 0 1 1-3.58 0 1.79 1.79 0 0 1 3.58 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.01 21.282 2.83-2.829m-2.83 0 2.83 2.83zM18.16 21.282l2.83-2.829m-2.83 0 2.83 2.83zM11.085 21.282l2.83-2.829m-2.83 0 2.83 2.83z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPasswordUserTwoTone;
