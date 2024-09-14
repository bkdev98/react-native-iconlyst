import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchStopLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a7.663 7.663 0 1 1 7.662-7.662M9.896 3h4.208M11.99 13.31l2.942-2.94"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.424 16.73h-1.94c-.677 0-1.101.48-1.101 1.157v1.828c0 .678.422 1.157 1.1 1.157h1.94c.679 0 1.101-.479 1.101-1.157v-1.828c0-.678-.422-1.157-1.1-1.157"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchStopLight;
