import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleSurveyBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.704 4.046a3.11 3.11 0 0 0-4.22 1.14l-5.12 8.87-2.08-1.21c.07.32.11.66.11 1.01 0 2.04-1.35 3.77-3.19 4.36l4.74 2.74c.48.28 1.01.42 1.54.42.27 0 .54-.04.81-.11.8-.21 1.47-.73 1.84-1.39a.4.4 0 0 0 .07-.1l6.64-11.49c.85-1.48.34-3.38-1.14-4.24M7.894 13.856c0-.95-.43-1.79-1.1-2.35-.54-.45-1.23-.72-1.98-.72-1.7 0-3.07 1.37-3.07 3.07 0 1.35.86 2.49 2.06 2.91a3.081 3.081 0 0 0 4.09-2.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleSurveyBold;
