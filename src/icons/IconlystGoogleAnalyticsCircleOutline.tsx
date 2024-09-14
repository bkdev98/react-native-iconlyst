import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAnalyticsCircleOutline = ({
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
      d="M14.142 8.574v2.034a.75.75 0 0 1-.75.75m.75-2.784h1.283v6.85h-6.85v-1.283h2.033a.75.75 0 0 0 .75-.75v-2.033h2.033m-.749-3.116c0-.645.523-1.168 1.168-1.168h1.948c.645 0 1.167.523 1.167 1.168v7.515c0 .645-.522 1.167-1.167 1.167H8.243a1.167 1.167 0 0 1-1.168-1.167v-1.948c0-.645.523-1.168 1.168-1.168h1.615v-1.616c0-.645.523-1.167 1.168-1.167h1.616z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAnalyticsCircleOutline;
