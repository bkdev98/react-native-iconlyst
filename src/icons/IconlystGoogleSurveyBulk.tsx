import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleSurveyBulk = ({
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
      d="M20.2 3.537a3.11 3.11 0 0 0-4.22 1.14l-5.12 8.87-3.97-2.3c-.48-.27-1.01-.4-1.53-.4-1.07 0-2.12.55-2.7 1.54a3.103 3.103 0 0 0 1.06 4.18c.02.02.05.03.08.05l.11.06 6.53 3.77c.48.28 1.01.42 1.54.42.27 0 .54-.04.81-.11.8-.21 1.47-.73 1.84-1.39a.4.4 0 0 0 .07-.1l6.64-11.49c.85-1.48.34-3.38-1.14-4.24"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.402 13.926a3.076 3.076 0 1 0-6.152 0 3.076 3.076 0 0 0 6.152 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleSurveyBulk;
