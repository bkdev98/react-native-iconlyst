import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeamviewerCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.812 8.39c.813-.686 2.056-.108 2.056.955v.658h2.265v-.658c0-1.063 1.243-1.641 2.056-.956l3.149 2.656a1.25 1.25 0 0 1 0 1.91l-3.15 2.656c-.812.686-2.055.108-2.055-.955v-.659h-2.265v.659c0 1.063-1.243 1.64-2.056.955l.484-.573-.484.573-3.149-2.655a1.25 1.25 0 0 1 0-1.911zm.556 1.493L6.857 12l2.511 2.118v-.87a.75.75 0 0 1 .75-.75h3.765a.75.75 0 0 1 .75.75v.87L17.144 12l-2.511-2.117v.87a.75.75 0 0 1-.75.75h-3.765a.75.75 0 0 1-.75-.75zm.411-.347"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTeamviewerCircleOutline;
