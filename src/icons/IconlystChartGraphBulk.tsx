import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartGraphBulk = ({
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
      d="M16.97 2.66H7.03c-2.5 0-4.53 2.03-4.53 4.53v5.45c0 2.5 2.03 4.53 4.53 4.53h9.94c2.5 0 4.53-2.03 4.53-4.53V7.19c0-2.5-2.03-4.53-4.53-4.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.13 7.828v4.17a.749.749 0 1 1-1.5 0v-4.17c0-.41.34-.75.75-.75s.75.34.75.75M12.94 10.038v1.96c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-1.96a.749.749 0 1 1 1.5 0M16.37 8.688v3.31a.749.749 0 1 1-1.5 0v-3.31a.749.749 0 1 1 1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.94 10.038v1.96c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-1.96a.749.749 0 1 1 1.5 0M16.37 8.688v3.31a.749.749 0 1 1-1.5 0v-3.31a.749.749 0 1 1 1.5 0M9.13 7.828v4.17a.749.749 0 1 1-1.5 0v-4.17c0-.41.34-.75.75-.75s.75.34.75.75M17.69 20.578c0 .42-.33.75-.75.75h-2.07c-.04.01-.08.01-.12.01-.02 0-.03 0-.05-.01H9.3c-.02.01-.03.01-.05.01-.04 0-.08 0-.12-.01H7.06c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h1.55l.43-2.66h1.52l-.43 2.66h3.74l-.43-2.66h1.52l.43 2.66h1.55c.42 0 .75.34.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartGraphBulk;
