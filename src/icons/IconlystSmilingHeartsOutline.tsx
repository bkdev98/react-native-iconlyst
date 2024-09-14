import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingHeartsOutline = ({
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
      d="M19.248 16.227a2 2 0 0 1 1.373-.053h.002c1.247.402 1.575 1.717 1.262 2.693v.001c-.25.78-.875 1.39-1.338 1.766a7 7 0 0 1-.912.627l-.018.01-.006.003-.002.002-.36-.658-.36.657h-.002l-.002-.002-.006-.003-.018-.01a5 5 0 0 1-.268-.164c-.17-.109-.401-.268-.646-.467-.462-.376-1.09-.987-1.334-1.764-.313-.978.02-2.29 1.265-2.69l.005-.002c.453-.142.935-.12 1.365.054m.001 4.39-.36.658a.75.75 0 0 0 .719.002zm.001-.885c.106-.073.227-.161.35-.262.408-.33.744-.71.857-1.06a.8.8 0 0 0-.007-.539.44.44 0 0 0-.286-.268.51.51 0 0 0-.465.078.75.75 0 0 1-.897.002.52.52 0 0 0-.467-.08.44.44 0 0 0-.286.27.8.8 0 0 0-.007.537l.001.004c.107.34.44.717.85 1.051.127.103.25.193.357.267M18.748 2.452a2.33 2.33 0 0 1 1.659-.091h.001c1.432.461 1.827 1.978 1.458 3.13-.296.922-1.041 1.657-1.613 2.121a9 9 0 0 1-1.113.766l-.022.012-.006.004h-.003v.002l-.36-.659c-.36.658-.36.657-.361.657h-.001l-.003-.002-.006-.003-.022-.012a6 6 0 0 1-.326-.2 9 9 0 0 1-.79-.571c-.571-.465-1.319-1.2-1.608-2.116-.368-1.155.031-2.668 1.46-3.129l.006-.001a2.34 2.34 0 0 1 1.65.092m.001 5.285-.361.657a.75.75 0 0 0 .72.002zm.001-.88a7 7 0 0 0 .557-.41c.516-.418.972-.921 1.13-1.413.196-.61-.069-1.11-.488-1.245a.83.83 0 0 0-.75.127.75.75 0 0 1-.897.002.84.84 0 0 0-.752-.128c-.42.137-.683.637-.489 1.244l.002.004c.15.48.603.981 1.123 1.404.206.167.403.308.564.414M4.747 14.452a2.33 2.33 0 0 1 1.66-.091h.001c1.433.461 1.827 1.978 1.458 3.13-.296.922-1.041 1.657-1.613 2.121a9 9 0 0 1-1.113.766l-.022.012-.006.004h-.003v.002l-.36-.659c-.36.658-.36.658-.361.657h-.001l-.002-.002-.007-.003-.022-.012a7 7 0 0 1-.326-.2 9 9 0 0 1-.79-.571c-.571-.465-1.319-1.2-1.608-2.116-.369-1.155.031-2.668 1.46-3.129l.006-.001a2.34 2.34 0 0 1 1.65.092m.002 5.285-.361.657a.75.75 0 0 0 .72.002zm.001-.88a7 7 0 0 0 .557-.409c.516-.42.972-.922 1.13-1.414.196-.61-.069-1.11-.488-1.245a.83.83 0 0 0-.75.127.75.75 0 0 1-.897.002.84.84 0 0 0-.752-.128c-.42.137-.683.637-.489 1.244l.002.004c.15.48.603.981 1.123 1.404.205.167.403.308.564.415M9.455 10a.63.63 0 0 0-.493.266.75.75 0 1 1-1.19-.914c.39-.506.99-.852 1.683-.852s1.293.346 1.682.852a.75.75 0 1 1-1.189.914.63.63 0 0 0-.493-.266M14.924 10a.63.63 0 0 0-.493.266.75.75 0 0 1-1.19-.914c.39-.506.99-.852 1.683-.852s1.293.346 1.682.852a.75.75 0 0 1-1.19.914.63.63 0 0 0-.492-.266M15.587 13.694a.75.75 0 0 1 .138 1.052c-.825 1.075-2.069 1.775-3.475 1.775s-2.649-.7-3.474-1.775a.75.75 0 0 1 1.189-.914c.577.75 1.4 1.189 2.285 1.189s1.71-.439 2.285-1.189a.75.75 0 0 1 1.052-.138"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.673 18.19a.75.75 0 0 1 1.06-.056 8.22 8.22 0 0 0 5.517 2.116 8.2 8.2 0 0 0 4.896-1.61.75.75 0 1 1 .892 1.207 9.7 9.7 0 0 1-5.788 1.903 9.72 9.72 0 0 1-6.521-2.501.75.75 0 0 1-.056-1.06M19.406 6.491a.75.75 0 0 1 1.037.223A9.7 9.7 0 0 1 22 12.002c0 1.87-.527 3.619-1.441 5.104a.75.75 0 1 1-1.278-.786 8.2 8.2 0 0 0 1.22-4.318c0-1.65-.484-3.185-1.317-4.474a.75.75 0 0 1 .222-1.037M12.25 3.75A8.25 8.25 0 0 0 4 12c0 .954.162 1.868.458 2.718a.75.75 0 0 1-1.416.494A9.7 9.7 0 0 1 2.5 12a9.75 9.75 0 0 1 9.75-9.75c1.577 0 3.069.375 4.389 1.041a.75.75 0 1 1-.676 1.34 8.2 8.2 0 0 0-3.713-.881"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmilingHeartsOutline;
