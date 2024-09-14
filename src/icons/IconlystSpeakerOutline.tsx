import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerOutline = ({
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
      d="M8.99 3.75a2.935 2.935 0 0 0-2.935 2.935v10.631a2.934 2.934 0 0 0 2.934 2.934h6.522a2.934 2.934 0 0 0 2.934-2.934V6.685A2.934 2.934 0 0 0 15.51 3.75zM4.554 6.685A4.435 4.435 0 0 1 8.989 2.25h6.522a4.434 4.434 0 0 1 4.434 4.435v10.631a4.434 4.434 0 0 1-4.434 4.434H8.99a4.434 4.434 0 0 1-4.434-4.434z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 11.145a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495m-4.248 2.747a4.248 4.248 0 1 1 8.495 0 4.248 4.248 0 0 1-8.495 0M10.096 6.611a.75.75 0 0 1 .75-.75h2.807a.75.75 0 0 1 0 1.5h-2.807a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerOutline;
