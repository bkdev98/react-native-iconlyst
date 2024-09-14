import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainBold = ({
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
      d="M17.744 7.963a.32.32 0 0 1-.277-.267C17.151 5.808 15.634 2.88 12 2.88c-3.632 0-5.15 2.928-5.467 4.817a.32.32 0 0 1-.276.267c-2.39.322-4.004 2.171-4.004 4.703a4.78 4.78 0 0 0 2.819 4.349 5.4 5.4 0 0 0 1.519.359c.157.013.288-.107.317-.262.047-.247.125-.482.239-.696a.36.36 0 0 0-.002-.34 2.5 2.5 0 0 1-.31-1.206v-1.38a2.5 2.5 0 0 1 4.65-1.278c.07.118.204.186.34.172a2.6 2.6 0 0 1 .527 0 .36.36 0 0 0 .341-.173 2.499 2.499 0 0 1 4.649 1.279v1.38c0 .436-.113.848-.31 1.206a.36.36 0 0 0-.001.339c.112.211.189.443.236.686.03.159.17.28.33.26.37-.045.839-.144 1.357-.355a4.77 4.77 0 0 0 2.793-4.34c0-2.532-1.614-4.38-4.003-4.703"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.336 12.74a.75.75 0 0 0-.75.75v1.38a.75.75 0 0 0 1.5 0v-1.38a.75.75 0 0 0-.75-.75M9.336 16.87a.75.75 0 0 0-.75.75V19a.75.75 0 0 0 1.5 0v-1.38a.75.75 0 0 0-.75-.75M12.09 18.25a.75.75 0 0 0-.75.75v1.37a.75.75 0 0 0 1.5 0V19a.75.75 0 0 0-.75-.75M12.09 14.12a.75.75 0 0 0-.75.75v1.37a.75.75 0 0 0 1.5 0v-1.37a.75.75 0 0 0-.75-.75M14.842 12.74a.75.75 0 0 0-.75.75v1.38a.75.75 0 0 0 1.5 0v-1.38a.75.75 0 0 0-.75-.75M14.842 16.87a.75.75 0 0 0-.75.75V19a.75.75 0 0 0 1.5 0v-1.38a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudRainBold;
