import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeAiOutline = ({
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
      d="M13.398 4.248a2.21 2.21 0 0 0-2.795 0l-5.574 4.54a2.22 2.22 0 0 0-.816 1.716v7.173a2.57 2.57 0 0 0 2.572 2.573h10.431a2.57 2.57 0 0 0 2.572-2.573v-7.173a2.22 2.22 0 0 0-.816-1.716zm.947-1.163a3.71 3.71 0 0 0-4.69 0l-5.574 4.54a3.72 3.72 0 0 0-1.368 2.88v7.172a4.07 4.07 0 0 0 4.072 4.073h10.431a4.07 4.07 0 0 0 4.072-4.073v-7.173a3.72 3.72 0 0 0-1.368-2.879z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.055 16.132a.75.75 0 0 1-.704-.49l-.101-.273a3.01 3.01 0 0 0-1.779-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.779-1.782l.101-.274a.75.75 0 0 1 1.407 0l.101.274a3.01 3.01 0 0 0 1.779 1.781l.273.101a.75.75 0 0 1 0 1.407l-.273.101a3.01 3.01 0 0 0-1.779 1.782l-.101.273a.75.75 0 0 1-.703.49m.948-3.35a4.5 4.5 0 0 1-.948-.949 4.5 4.5 0 0 1-.95.95c.363.267.682.587.95.95.267-.363.587-.683.948-.95M15.365 17.374a.75.75 0 0 1-.717-.532 1.02 1.02 0 0 0-.678-.679.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-.718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeAiOutline;
