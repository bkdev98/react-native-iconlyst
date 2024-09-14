import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallEmergencyOutline = ({
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
      d="M17.107 21.75c-2.331 0-5.363-1.85-9.014-5.5-3.665-3.666-5.517-6.708-5.5-9.044a3.5 3.5 0 0 1 1.13-2.65q.042-.046.087-.09c1.346-1.346 2.248-1.92 3.165-1.878 1.06.014 1.8.8 2.75 1.791.231.244.482.508.761.786a2.85 2.85 0 0 1 .554 3.542c-.4 1.028-.75 1.916.967 3.63 1.713 1.714 2.6 1.368 3.63.964a2.85 2.85 0 0 1 3.54.552q.413.41.776.751c1 .95 1.787 1.7 1.8 2.763.01.9-.532 1.82-1.875 3.161l-.093.09a3.52 3.52 0 0 1-2.651 1.131zM4.872 5.522l-.1.107a2.02 2.02 0 0 0-.678 1.586c-.008 1.32.864 3.775 5.063 7.973 4.18 4.177 6.63 5.06 7.953 5.06h.018a2.03 2.03 0 0 0 1.587-.68q.078-.081.165-.155c.91-.916 1.38-1.6 1.375-2.027s-.564-.96-1.335-1.695a39 39 0 0 1-.8-.777c-.7-.7-1.085-.548-1.933-.217-1.2.468-2.83 1.107-5.238-1.3C8.54 10.99 9.18 9.354 9.65 8.16c.331-.847.483-1.233-.218-1.933a42 42 0 0 1-.788-.814c-.729-.766-1.254-1.32-1.683-1.325h-.012c-.429 0-1.11.471-2.078 1.438zM18.597 9.658a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.5 0v5.908a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M21.155 8.181a.75.75 0 0 1-.375-.1l-5.116-2.954a.75.75 0 1 1 .75-1.3l5.116 2.954a.75.75 0 0 1-.376 1.4"
    />
    <Path
      fill={props.color}
      d="M16.04 8.179a.75.75 0 0 1-.376-1.4l5.117-2.954a.75.75 0 0 1 .75 1.3l-5.117 2.954a.75.75 0 0 1-.374.1"
    />
  </Svg>
);
export default IconlystPhoneCallEmergencyOutline;
