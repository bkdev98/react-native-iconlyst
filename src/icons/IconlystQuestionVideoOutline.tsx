import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuestionVideoOutline = ({
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
      d="M8.912 14.5a.75.75 0 0 1 .75.75v.049a.75.75 0 1 1-1.5 0v-.049a.75.75 0 0 1 .75-.75M6.572 10.614A2.61 2.61 0 0 1 9.19 7.996a2.616 2.616 0 0 1 2.617 2.618c0 1.032-.595 1.757-1.346 2.173l-.171.097c-.384.216-.494.277-.638.532a.75.75 0 1 1-1.306-.736c.361-.641.836-.901 1.226-1.115q.078-.042.151-.084l.009-.005c.394-.217.575-.499.575-.862 0-.62-.5-1.118-1.117-1.118-.62 0-1.117.495-1.117 1.118a.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.731 20.001H5.942a4.45 4.45 0 0 1-4.6-4.8v-6.4a4.5 4.5 0 0 1 4.6-4.8h6.79a4.5 4.5 0 0 1 4.6 4.8v6.4a4.5 4.5 0 0 1-4.601 4.8m-6.789-14.5a3 3 0 0 0-3.1 3.3v6.4a2.97 2.97 0 0 0 3.1 3.3h6.789a2.97 2.97 0 0 0 3.1-3.3v-6.4a2.97 2.97 0 0 0-3.1-3.3z"
    />
    <Path
      fill={props.color}
      d="M20.89 17.843a2 2 0 0 1-1.3-.463l-3.393-2.787a.75.75 0 1 1 .951-1.159l3.394 2.787a.44.44 0 0 0 .342.122.54.54 0 0 0 .542-.54l.012-7.6a.54.54 0 0 0-.884-.419l-3.407 2.788a.75.75 0 1 1-.949-1.16l3.406-2.789a2.04 2.04 0 0 1 3.334 1.583l-.012 7.6a2.04 2.04 0 0 1-2.039 2.037z"
    />
  </Svg>
);
export default IconlystQuestionVideoOutline;
