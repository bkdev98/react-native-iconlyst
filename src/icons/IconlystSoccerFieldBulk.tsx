import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoccerFieldBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M22 8.08v7.84c0 1.12-.01 1.7-.27 2.22-.24.47-.62.85-1.09 1.09-.54.27-1.14.27-2.34.27H5.7c-1.2 0-1.8 0-2.34-.27-.47-.24-.85-.62-1.09-1.09-.26-.52-.27-1.1-.27-2.22V8.08c0-1.12.01-1.7.27-2.21.24-.48.62-.85 1.09-1.09C3.9 4.5 4.5 4.5 5.7 4.5h12.6c1.2 0 1.8 0 2.33.28.48.24.86.61 1.1 1.09.26.51.27 1.09.27 2.21"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 14.29V9.72c.97.31 1.67 1.21 1.67 2.28s-.7 1.97-1.67 2.29m-1.5 0A2.41 2.41 0 0 1 9.58 12c0-1.07.7-1.97 1.67-2.28zm1.5-6.13V4.61c0-.04 0-.08-.01-.11h-1.48c-.01.03-.01.07-.01.11v3.55c-1.8.35-3.17 1.94-3.17 3.84 0 1.91 1.37 3.5 3.17 3.85v3.55c0 .03 0 .07.01.1h1.48c.01-.03.01-.07.01-.1v-3.55c1.8-.35 3.17-1.94 3.17-3.85 0-1.9-1.37-3.49-3.17-3.84M22 8.08h-1.43c-.68 0-1.09 0-1.48.21-.33.17-.6.43-.77.77-.2.39-.2.8-.2 1.47v2.94c0 .68 0 1.09.2 1.48.17.33.44.6.77.77.39.2.8.2 1.48.2H22v-1.5h-1.43c-.35 0-.71 0-.79-.03a.33.33 0 0 1-.13-.13c-.03-.08-.03-.44-.03-.79v-2.94c0-.34 0-.7.03-.78.03-.06.07-.1.13-.13.08-.04.44-.04.79-.04H22zM2 15.92h1.43c.68 0 1.09 0 1.48-.2.33-.17.6-.44.77-.77.2-.39.2-.8.2-1.48v-2.94c0-.67 0-1.08-.2-1.47-.17-.34-.44-.6-.77-.77-.39-.21-.8-.21-1.48-.21H2v1.5h1.43c.35 0 .71 0 .79.04.06.03.1.07.13.13.03.08.03.44.03.78v2.94c0 .35 0 .71-.03.79-.03.05-.07.1-.13.13-.08.03-.44.03-.79.03H2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSoccerFieldBulk;
