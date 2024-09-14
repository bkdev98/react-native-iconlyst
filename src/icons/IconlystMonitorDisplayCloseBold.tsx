import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCloseBold = ({
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
      d="m11.017 19.314.4-2.49h2.39l.41 2.49zm-7.11-15.81a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.11 1.11c-.2.5-.3 1.03-.3 1.57v5.22c0 2.4 1.95 4.36 4.35 4.36h1.89l-.4 2.49h-1.24c-.42 0-.76.34-.76.75 0 .42.34.75.76.75h8.634a.749.749 0 1 0 0-1.5h-1.164l-.36-2.23 3.8 3.8c.15.15.34.22.53.22.2 0 .39-.07.53-.22.3-.29.3-.76 0-1.06zM17.01 2.895H7.57c-.2 0-.39.12-.46.31-.08.18-.04.4.11.54l11.97 11.97c.09.1.22.15.35.15.11 0 .23-.04.32-.12.96-.82 1.51-2.01 1.51-3.28v-5.22c0-2.4-1.95-4.35-4.36-4.35"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayCloseBold;
