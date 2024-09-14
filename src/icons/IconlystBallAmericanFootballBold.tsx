import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallAmericanFootballBold = ({
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
      d="M3.128 14.995a.292.292 0 0 0-.498.161q-.071.486-.105.98c-.09 1.346.025 3.172 1.075 4.232.893.9 2.319 1.132 3.551 1.132q.37-.002.707-.024.497-.035.986-.105a.292.292 0 0 0 .161-.499zM20.851 9.139c.17.17.462.08.5-.16q.083-.533.122-1.08c.094-1.356-.019-3.2-1.096-4.277-1.076-1.077-2.918-1.19-4.282-1.095q-.544.039-1.075.123a.293.293 0 0 0-.159.498zM13.873 11.187l-3.036 3.036a.746.746 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l3.036-3.037a.75.75 0 1 1 1.06 1.061m-.98-7.887a.3.3 0 0 0-.303-.073 14.72 14.72 0 0 0-9.4 9.483.3.3 0 0 0 .074.3l7.727 7.727a.3.3 0 0 0 .3.074 14.7 14.7 0 0 0 9.482-9.4.3.3 0 0 0-.073-.302z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallAmericanFootballBold;
