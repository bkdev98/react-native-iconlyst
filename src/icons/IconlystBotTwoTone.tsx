import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBotTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.57 7.594h5.86c2.048 0 3.323 1.446 3.323 3.492v3.26c0 2.046-1.275 3.491-3.324 3.491H9.57c-2.047 0-3.322-1.445-3.322-3.492v-3.26c0-2.045 1.28-3.491 3.323-3.491"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.757 4.257a1.257 1.257 0 1 0-2.514 0 1.257 1.257 0 0 0 2.514 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 7.594V5.516"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.252 11.155v-.01M14.747 11.155v-.01M11.122 14.402h2.756M8.545 21.002c.94-.545 2.367-.896 3.957-.896s3.009.35 3.949.896M21.047 11.25v2.776M3.953 11.25v2.776"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBotTwoTone;
