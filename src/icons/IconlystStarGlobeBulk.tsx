import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGlobeBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.66 20.955c-.03.45-.25.85-.61 1.12-.4.29-.92.29-1.97.29H8.92c-1.04 0-1.57 0-1.96-.29-.37-.27-.59-.67-.62-1.12-.03-.49.26-.93.82-1.81l.043-.067a.5.5 0 0 1 .422-.233h8.75a.5.5 0 0 1 .422.233l.043.067c.57.88.85 1.32.82 1.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M12 2.865c-4.6 0-8.34 3.74-8.34 8.33a8.29 8.29 0 0 0 3.178 6.55c.085.066.19.1.299.1h9.727a.5.5 0 0 0 .298-.1 8.29 8.29 0 0 0 3.178-6.55c0-4.59-3.74-8.33-8.34-8.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.76 10.715-1.8.93-.93 1.8c-.07.16-.23.25-.41.25-.17 0-.33-.09-.41-.25l-.92-1.8-1.81-.93a.46.46 0 0 1 0-.82l1.81-.92.92-1.81c.08-.15.24-.25.41-.25.18 0 .34.1.41.25l.93 1.81 1.8.92c.16.08.25.24.25.41 0 .18-.09.33-.25.41M14.93 14.785a.8.8 0 0 1-.54-.22.767.767 0 0 1 0-1.07c.29-.29.76-.3 1.06 0l.01.01c.29.29.29.76 0 1.06-.15.14-.34.22-.53.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarGlobeBulk;
