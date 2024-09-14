import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNextCircleBulk = ({
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
      d="M12.57 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.32 15.43c-.528-.302-.865-.83-.952-1.5a18.2 18.2 0 0 1 0-3.867c.082-.655.41-1.184.922-1.487.528-.313 1.18-.343 1.838-.081a10 10 0 0 1 2.958 1.874l.004.004c.49.455.759 1.037.757 1.637-.003.598-.273 1.173-.758 1.616a9.9 9.9 0 0 1-2.951 1.873 2.2 2.2 0 0 1-.864.18c-.338 0-.664-.082-.954-.248m6.804.31a.75.75 0 0 1-.75-.75V9.01a.75.75 0 0 1 1.5 0v5.98a.75.75 0 0 1-.75.75m-5.556-5.854c-.209-.083-.396-.09-.514-.02-.14.083-.184.274-.195.365a16.6 16.6 0 0 0-.003 3.52c.017.127.067.296.21.378.124.071.301.067.492-.013a8.4 8.4 0 0 0 2.516-1.594c.124-.114.271-.295.272-.518.001-.225-.148-.412-.275-.53a8.5 8.5 0 0 0-2.503-1.588"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNextCircleBulk;
