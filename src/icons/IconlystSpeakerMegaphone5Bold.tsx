import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone5Bold = ({
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
      d="M11.966 19.235a.98.98 0 0 1-.5.54.97.97 0 0 1-.73.02.96.96 0 0 1-.54-.49l-1.32-2.91c.6-.12 1.26-.23 1.96-.32l1.11 2.43c.1.23.11.49.02.73m2.92-13.35c-.59-1.29-1.56-2.13-2.65-2.31-.89-.14-1.76.18-2.39.87a37 37 0 0 1-4.11 3.87l1.79 3.78c.17.38 0 .82-.38.99-.1.05-.2.07-.31.07a.75.75 0 0 1-.68-.44l-1.63-3.45c-.36.27-.7.51-1.01.72-1.27.87-1.62 2.46-.89 4.05l.39.86c.6 1.32 1.69 2.08 2.89 2.08q.375 0 .75-.09c.22-.06.46-.12.71-.17l1.47 3.21c.27.59.75 1.05 1.37 1.28.28.1.57.16.87.16.34 0 .69-.08 1.01-.22.6-.28 1.06-.77 1.29-1.38.23-.62.2-1.28-.07-1.88l-.91-1.99c.82-.08 1.69-.13 2.6-.15a2.85 2.85 0 0 0 2.37-1.34c.51-.8.57-1.8.18-2.67zM21.217 5.981a5.92 5.92 0 0 0-4.145-3.326.746.746 0 0 0-.89.577.75.75 0 0 0 .578.89 4.36 4.36 0 0 1 3.092 2.48 4.37 4.37 0 0 1-.114 3.873.75.75 0 1 0 1.326.701 5.86 5.86 0 0 0 .153-5.195"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.76 5.23a.75.75 0 1 0-.522 1.406 2.139 2.139 0 0 1 1.241 2.815.75.75 0 0 0 .696 1.03.75.75 0 0 0 .696-.47 3.63 3.63 0 0 0-.063-2.876A3.62 3.62 0 0 0 16.76 5.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone5Bold;
