import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSnowBulk = ({
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
      d="M18.244 8.545a.32.32 0 0 1-.276-.267c-.316-1.888-1.833-4.817-5.468-4.817-3.633 0-5.149 2.928-5.466 4.817a.32.32 0 0 1-.276.267c-2.39.322-4.005 2.171-4.005 4.703a4.78 4.78 0 0 0 2.818 4.349 5.4 5.4 0 0 0 1.552.363c.15.012.279-.1.314-.248.056-.24.145-.472.27-.686a.36.36 0 0 0 0-.367 2.501 2.501 0 0 1 2.276-3.793.36.36 0 0 0 .329-.182 2.501 2.501 0 0 1 4.377 0c.065.118.194.189.33.181a2.5 2.5 0 0 1 2.278 3.794.36.36 0 0 0-.002.367c.127.215.216.448.273.69.034.148.162.26.314.25a5.2 5.2 0 0 0 1.571-.378 4.77 4.77 0 0 0 2.793-4.34c0-2.532-1.613-4.38-4.002-4.703"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.814 14.996a.75.75 0 0 0-1.021-.291l-1.542.86V13.89a.75.75 0 1 0-1.5 0l.001 1.673-1.542-.86a.75.75 0 0 0-.731 1.312l1.481.825-1.481.824a.751.751 0 0 0 .731 1.31l1.542-.858-.001 1.673a.75.75 0 1 0 1.5 0v-1.673l1.542.859a.75.75 0 1 0 .731-1.311l-1.481-.824 1.481-.825a.75.75 0 0 0 .29-1.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSnowBulk;
