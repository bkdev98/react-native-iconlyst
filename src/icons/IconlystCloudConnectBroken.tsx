import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectBroken = ({
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
      d="M12 3c3.412 0 4.62 3.08 4.62 4.62 2.14.02 3.87 1.458 3.87 3.907 0 1.584-.94 2.95-2.295 3.563a4.4 4.4 0 0 1-1.58.316H7.379c-.43 0-1-.089-1.57-.32a3.9 3.9 0 0 1-2.297-3.56c0-2.448 1.73-3.886 3.87-3.906 0-1.084.599-2.93 2.143-3.93"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.482 19.52a1.482 1.482 0 1 1-2.964 0 1.482 1.482 0 0 1 2.964 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.002 18.032v-2.61M17.756 19.52H13.46m-2.927 0H6.246"
    />
  </Svg>
);
export default IconlystCloudConnectBroken;
