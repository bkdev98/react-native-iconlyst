import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplay2Outline = ({
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
      d="M12.166 14.832a.75.75 0 0 1 0 1.06l-2.105 2.106 2.105 2.105a.75.75 0 0 1-1.06 1.06L8.47 18.53a.75.75 0 0 1 0-1.061l2.636-2.636a.75.75 0 0 1 1.06 0M11.835 2.833a.75.75 0 0 1 1.06 0l2.637 2.635a.75.75 0 0 1 0 1.06l-2.636 2.637a.75.75 0 0 1-1.061-1.061l2.105-2.106-2.105-2.104a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A6.75 6.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A5.25 5.25 0 0 0 3.75 12c0 1.671.783 3.157 2.005 4.121a.75.75 0 1 1-.93 1.178A6.74 6.74 0 0 1 2.25 12M18.121 6.825a.75.75 0 0 1 1.053-.125A6.74 6.74 0 0 1 21.75 12 6.75 6.75 0 0 1 15 18.75H9a.75.75 0 0 1 0-1.5h6c2.9 0 5.25-2.351 5.25-5.25a5.24 5.24 0 0 0-2.005-4.122.75.75 0 0 1-.124-1.053"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplay2Outline;
