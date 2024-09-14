import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemoveBold = ({
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
      d="M14.52 11.474c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22a.7.7 0 0 1-.53-.22L12 11.074l-1.46 1.46c-.29.29-.76.29-1.06 0a.754.754 0 0 1 0-1.06l1.46-1.46-1.46-1.45a.754.754 0 0 1 0-1.06c.3-.3.77-.3 1.06 0L12 8.954l1.46-1.45c.29-.3.76-.3 1.06 0 .29.29.29.76 0 1.06l-1.46 1.45zm-4.39 8.36.43-2.66h2.88l.43 2.66zm6.84-17.18H7.03c-2.5 0-4.53 2.04-4.53 4.53v5.46c0 2.5 2.03 4.53 4.53 4.53h2.01l-.43 2.66H7.05a.749.749 0 1 0 0 1.5h2.18c.01 0 .01.01.02.01v-.01h5.5v.01c.01 0 .01-.01.01-.01h2.18c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75h-1.55l-.43-2.66h2.01c2.5 0 4.53-2.03 4.53-4.53v-5.46c0-2.49-2.03-4.53-4.53-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayRemoveBold;
